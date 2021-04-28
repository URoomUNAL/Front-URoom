<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-5">Encuentra tu habitación ideal</h1>
      </b-col>
    </b-row>       
    <b-row>
      <b-col>
        <Map :markers="markers" :filtro="filtro" @clicked="UpdatePosition" :loading="loading"/>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col class="mt-4">
        <Filters @clicked="distance" :distancia="form" @filter="showFilters" @loading="UpdateLoading"/>
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
    <b-row class="my-5" v-if="loading">
      <b-col>
        <b-spinner variant="primary"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Map from './Map.vue'
import LocalService from '../services/local-services.js'
import RoomsGroup from './RoomsGroup.vue'
import Filters from './Filters.vue'
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
        filtro:false,
        form: '',
        loading: true
      }
    },
    async created(){
      this.markers = await LocalService.getMaps();
      this.loading = false;
    },
    methods: {
      distance(value){
          this.filtro = value;
      },
      showFilters(value){
        this.markers = value;
        this.loading = false;
        console.log(this.markers)
      },
      UpdatePosition(value) {
        this.form = {
          latitude: value[0],
          longitude: value[1]
        }
      },
      UpdateLoading(value){
        this.loading = value;
      }
    }
  }
</script>
<style>

</style>