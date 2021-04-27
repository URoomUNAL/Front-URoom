<template>
    <div>
      <!-- {{markers}} -->
        <b-row class="m-0 p-0">
            <b-col class="m-0 p-0">
                <h1 class="primary mb-3">Encuentra tu habitación ideal</h1>
            </b-col>
        </b-row>
        
        <b-overlay :show="!markers" variant="white" spinner-variant="primary">
          <p></p>
          <p></p>
        </b-overlay>
        
        <div v-if="markers">
          <b-overlay :show="loading" variant="white" spinner-variant="primary">
          <b-row class="mt-2 p-0">
            
              <b-col class="m-0 p-0">
                  <Filters @clicked="distancia" :distancia="form" @filter="showFilters" @loading="showLoading"/>
              </b-col>
           
          </b-row>
          </b-overlay>
          <b-row>
            <b-col>
              <Map :markers="markers" :filtro="filtro" @clicked="UpdatePosition" :loading="loading"/>
            </b-col>
          </b-row>
          <hr/>
          <h1 class="primary mb-3">Publicaciones</h1>
          <RoomsGroup :markers="markers"/>
          
        </div>
        
    </div>
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
      distancia(value){
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