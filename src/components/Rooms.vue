<template>
    <div>
        <b-row>
            <b-col>
                <h1 class="primary mb-3">Encuentra tu habitación ideal.</h1>
            </b-col>
        </b-row>
        <div v-if="markers">
          <Map :markers="markers"/>
        </div>
    </div>
</template>

<script>
import Map from './Map.vue'
import LocalService from '../services/local-services.js'
  export default {
    name: 'Rooms',
    components: {
        Map
    },
    data() {
      return {
        markers: ''
      }
    },
    created(){
      this.getTodos()
    },
    methods: {
      async getTodos() {
        this.markers = await LocalService.getMaps()
      }
    }
  }
</script>