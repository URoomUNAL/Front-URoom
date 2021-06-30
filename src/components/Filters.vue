<template>
  <b-col>
    <b-button block variant="primary" class="mb-3" v-b-toggle.filters>Filtrar publicaciones</b-button>
      <b-collapse accordion="my-accordion" id="filters">
        <b-form @submit.prevent="FilterFunction">
          <b-row align-h="center" class="my-4">
            <b-col sm="6" md="4" xl="3">
                <b-button variant="facebook" class="mt-3 ml-auto float-right" type="submit" block @click="Reset" >Borrar filtros</b-button>
            </b-col>
          </b-row>
          <b-row align-h="center" class="my-4">
            <b-col sm="6" md="6" xl="3">
              <h3>Rango de precio</h3>
              <label for="min" >Precio mínimo</label>
              <b-form-input @blur="fields.price.min = false" @focus="fields.price.min = true" class="mb-2" id="min" v-model="price_min" min="0" :max="form.price.max" step="10000"></b-form-input>
              <label for="max">Precio máximo</label>
              <b-form-input @blur="fields.price.max = false" @focus="fields.price.max = true" id="max" v-model="price_max" :min="form.price.min" max="1000000000" step="10000"></b-form-input>
            </b-col>
            <b-col sm="6" md="6" xl="3">
              <h3>Mínimo puntaje: {{ form.min_score }}</h3>
              <b-form-input id="range-2" v-model="form.min_score" type="range" min="0" max="5" step="0.1"></b-form-input>
            </b-col>
            <b-col sm="6" md="6" xl="3">
              <h3>Servicios</h3>
              <b-form-group description="Elige los servicios que incluye la habitación.">
                <tag-select :options="fields.services" @value="PutServicesValues"/>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" xl="3">
              <h3>Reglas</h3>
              <b-form-group description="Elige las reglas.">
                <tag-select :options="fields.rules" @value="PutRulesValues"/>
              </b-form-group>
            </b-col>
            <b-col sm="6" md="6" xl="3">
              <b-button v-on:click="activate" block variant="primary" class="mb-1" v-b-toggle.filtersDistance>Filtrar por distancia</b-button>
              <b-collapse accordion="my-accordion2" id="filtersDistance">
                <label for="range-3">Distancia: {{form.distance.radius}}km.</label>
                <b-form-input @change="FilterFunction" label="Pon tu pin en el mapa" id="range-3" v-model="form.distance.radius" type="range" min="0" max="10" step="0.01"></b-form-input>
                <label for="range-3">Pon tu pin en el mapa.</label>
              </b-collapse>              
            </b-col>
        </b-row>
        <b-row align-h="center" class="my-4">
          <b-col md="4" lg="4">
            <b-button v-b-toggle.filters variant="primary" class="mt-3" type="submit" block>Aceptar</b-button>
          </b-col> 
          
        </b-row>
      </b-form>
    </b-collapse>
  </b-col>
</template>
<script>
import TagSelect from './TagSelect.vue'
import PostService from '../services/post-services.js'
import LocalServices from '../services/local-services.js'
export default {
  props: ['distancia'],
  name: 'Filters',
  data(){
      return{
          form: {
              min_score: null,
              price:{
                  min: 200000,
                  max: 90000000
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
      var self = this;
      self.fields.loading = true;
      LocalServices.GetServices()
        .then(function(response){
          response.data.forEach((element) =>{
            self.fields.services.push(element.name);
          });
        }
      );
      LocalServices.GetRules()
        .then(function(response){
          response.data.forEach((element) =>{
            self.fields.rules.push(element.name);
            self.fields.loading = false;
          });
        }
      );
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
            return '$ ' + this.form.price.min.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
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
          this.$emit('clicked', this.pin)
      },
      PutServicesValues(values){
          this.form.services = values;
      },
      PutRulesValues(values){
          this.form.rules = values;
      }, 
      async FilterFunction(){
          this.form.distance.radius = parseFloat(this.form.distance.radius)
          this.$emit('radius', this.form.distance.radius);
          this.$emit('loading', true);
          this.$emit('filter', await PostService.FilterPost(this.form));
          this.$emit('loading', false);
          
      },
      Reset(){
        this.pin = false
        this.form.distance.radius = 0;
        this.$emit('radius', 0);
        this.$emit('clicked', this.pin);
          this.form = {
              min_score: null,
              price:{
                  min: 200000,
                  max: 90000000
              },
              distance:{
                  origin: [],
                  radius: 0
              },
              services: [],
              rules: []
          }
      }
  },
  components:{
      TagSelect
  },
  watch: { 
    distancia: function(newVal){
        this.form.distance.origin = [newVal.latitude, newVal.longitude]
    }
  }
}
</script>