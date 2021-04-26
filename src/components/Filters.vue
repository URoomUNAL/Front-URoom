<template>
    <b-col class="col-10 offset-1">
        <b-button block variant="primary" class="mb-3" v-b-toggle.filters>Filtrar publicaciones</b-button>
            <b-collapse accordion="my-accordion" id="filters" >
                <b-form @submit.prevent="FilterFunction">
                    <b-row>
                        <b-col sm="6" md="3">
                            <h3>Rango de precio</h3>
                            <label for="min" >Precio mínimo</label>
                            <b-form-input @blur="fields.price.min = false" @focus="fields.price.min = true" class="mb-2" id="min" v-model="price_min" min="0" :max="form.price.max" step="10000"></b-form-input>
                            <label for="max">Precio máximo</label>
                            <b-form-input @blur="fields.price.max = false" @focus="fields.price.max = true" id="max" v-model="price_max" :min="form.price.min" max="1000000000" step="10000"></b-form-input>
                        </b-col>
                        <b-col sm="6" md="3">
                            <h3>Mínimo puntaje: {{ form.min_score }}</h3>
                            <b-form-input id="range-2" v-model="form.min_score" type="range" min="0" max="5"></b-form-input>
                        </b-col>
                        <b-col sm="6" md="3">
                            <h3>Servicios</h3>
                            <b-form-group label="Servicios:" description="Elige los servicios que incluye la habitación.">
                                <tag-select :options="fields.services" @value="PutServicesValues"/>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="3">
                            <h3>Reglas</h3>
                            <b-form-group label="Normas:" description="Elige las reglas.">
                                <tag-select :options="fields.rules" @value="PutRulesValues"/>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="3">
                            <b-button v-on:click="activate" block variant="primary" class="mb-3" v-b-toggle.filtersDistance>Filtrar por distancia</b-button>
                            <b-collapse accordion="my-accordion2" id="filtersDistance">
                                <label for="range-3">Distancia: {{form.distance.radius}}km</label>
                                <b-form-input id="range-3" v-model="form.distance.radius" type="range" min="0" max="10" step="0.1"></b-form-input>
                            </b-collapse>
                        </b-col>
                    </b-row>
                    <div v-if="distancia" >                   
                        <b-row class="mb-2">
                            {{distancia}}                       
                        </b-row>
                    </div>
                    <b-col md="4" lg="4" class="offset-4">
                        <b-button variant="primary" class="mt-3" type="submit" block>Filtrar</b-button>
                    </b-col> 
                </b-form>
            </b-collapse>
            {{form}}
    </b-col>
</template>
<script>
import TagSelect from './TagSelect.vue'
import PostService from "../services/post-services.js"
export default {
    props: ['distancia'],
    name: 'Filters',
    data(){
        return{
            form: {
                min_score: 3,
                price:{
                    min: 200000,
                    max: 700000
                },
                distance:{
                    origin: [],
                    radius: 2
                },
                services: [],
                rules: []
            },
            fields: {
                services: [],
                rules: [],
                price:{
                    min:false,
                    max:false
                }
            },
            pin: false
        }
    },
    async created(){
        this.fields.loading = true;
        var services = await PostService.GetServices();
        var list_services = [];
        services.forEach((element) =>{
            list_services.push(element.name);
        })
        this.fields.services = list_services;
        var rules = await PostService.GetRules();
        var list_rules = [];
        rules.forEach((element) =>{
            list_rules.push(element.name);
        })
        this.fields.rules = list_rules;
        console.log(localStorage.getItem("user_email"));
        this.fields.loading = false;
    },
    computed: {
      price_min: {
        get: function(){
          if(this.fields.price.min){
            if(this.form.price.min > 0){
              return this.form.price.min.toString();
            }else{
              return '';
            }
          }else{
            if(this.form.price.min > 0){
              return "$ " + this.form.price.min.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
            }else{
              return '';
            }
          }
        },
        set: function(modifiedValue){
          let newValue = parseFloat(modifiedValue.replace(/[^\d]/g, ""))
          if(isNaN(newValue)) {
            newValue = 0;
          }
          console.log(newValue)
          this.form.price.min = newValue;
        }      
      },
      price_max: {
        get: function(){
          if(this.fields.price.max){
            if(this.form.price.max > 0){
              return this.form.price.max.toString();
            }else{
              return '';
            }
          }else{
            if(this.form.price.max > 0){
              return "$ " + this.form.price.max.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
            }else{
              return '';
            }
          }
        },
        set: function(modifiedValue){
          let newValue = parseFloat(modifiedValue.replace(/[^\d]/g, ""))
          if(isNaN(newValue)) {
            newValue = 0;
          }
          this.form.price.max = newValue;
        }
      }
      //distance.origin = this.distancia
    },
    methods: {
        activate(){
            this.pin = true;
            this.$emit("clicked", this.pin)
        },
        PutServicesValues(values){
            this.form.services = values;
        },
        PutRulesValues(values){
            this.form.rules = values;
        }, 
        async FilterFunction(){
            console.log("ey");
            this.$emit("filter", await PostService.FilterPost(this.form));
        }
    },
    components:{
        TagSelect
    },
    watch: { 
        distancia: function(newVal){// watch it
            this.form.distance.origin = [newVal.latitude, newVal.longitude]
        }
    }
}
</script>