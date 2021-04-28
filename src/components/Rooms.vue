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
      <b-col class="mt-4" lg="8">
        <Filters @clicked="distance" :distancia="form" @filter="showFilters" @loading="showLoading"/>
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
        <RoomsGroup :markers="markers"/>
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
        form:'',
        loading: false
      }
    },
    async created(){
      await this.getTodos()
      console.log(this.markers);
    },
    methods: {
      async getTodos() {
        this.markers = await LocalService.getMaps()
      },
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
      showLoading(value) {
        this.loading = value
        console.log(this.loading)
      }
    }
  }
</script>
<style>

</style>