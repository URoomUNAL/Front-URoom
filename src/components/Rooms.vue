<template>
    <div>
        <b-row>
            <b-col>
                <h1 class="primary mb-3">Encuentra tu habitación ideal</h1>
            </b-col>
        </b-row>
        <div v-if="markers">
          <Map :markers="markers"/>
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
  export default {
    name: 'Rooms',
    components: {
        Map,
        RoomsGroup
    },
    data() {
      return {
        markers: '',
        rows: ''
      }
    },
    async created(){
      await this.getTodos()
      console.log(this.markers)
    },
    methods: {
      async getTodos() {
        this.markers = await LocalService.getMaps()
      }
      
    }
  }
</script>
<style>

</style>