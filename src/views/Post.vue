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
                <b-form-input label="Pon tu pin en el mapa" id="range-3" v-model="form.distance.radius" type="range" min="0" max="10" step="0.1"></b-form-input>
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
import LocalService from '../services/local-services.js'
export default {
  props: ['id'],
  name: 'Post',
  data(){
      return{
          
      }
  },
  created(){
      
  },
  methods: {
      
  },
  components:{
  }
  
}
</script>