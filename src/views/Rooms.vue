<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-5">Encuentra tu habitación ideal</h1>
      </b-col>
    </b-row>  
     <b-row align-h="center">
      <b-col class="mt-4">
        <Filters @clicked="distance" :distancia="form" @filter="showFilters" @loading="UpdateLoading" @radius="Radius"/>
      </b-col>
    </b-row>
         
    <b-row>
      <b-col class="mb-1">
        <Map :markers="markers" :filtro="filtro" @clicked="UpdatePosition" :loading="loading" :radius="radius"/>
      </b-col>
    </b-row>
   
    <hr class="my-5"/>
    <b-row>
      <b-col>
        <h1 class="primary mb-5">Publicaciones</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <RoomsGroup :posts="markers"/>
      </b-col>
    </b-row>
    <b-row class="mb-5" v-if="loading">
      <b-col class="mb-5">
        <b-spinner variant="primary"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Map from '../components/Map.vue'
import LocalService from '../services/local-services.js'
import RoomsGroup from '../components/RoomsGroup.vue'
import Filters from '../components/Filters.vue'
  export default {
    name: 'Rooms',
    components: {
        Map,
        RoomsGroup,
        Filters
    },
    data() {
      return {
        markers: '',
        rows: '',
        filtro: false,
        form: '',
        loading: true,
        radius:0
      }
    },
    created(){
      var self = this;
      self.loading = true;
      LocalService.GetPosts()
        .then(function(response){
          self.markers = response.data;
          self.loading = false;
        }
        ).catch(function(error){
          console.log(error);
        }
        );
    },
    methods: {
      distance(value){
          this.filtro = value;
      },
      showFilters(value){
        this.markers = value;
        this.loading = false;
      },
      UpdatePosition(value) {
        this.form = {
          latitude: value[0],
          longitude: value[1]
        }
      },
      UpdateLoading(value){
        this.loading = value;
      },
      Radius(value){
        this.radius = value
      }
    }
  }
</script>

<style>
.card-img-top{
    border-top-left-radius: 1rem !important;
    border-top-right-radius: 1rem !important;
}
</style>