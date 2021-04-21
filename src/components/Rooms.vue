<template>
    <div>
        <b-row>
            <b-col>
                <h1 class="primary mb-3">Encuentra tu habitación ideal.</h1>
            </b-col>
        </b-row>
        <Map/>
    </div>
</template>

<script>
import Map from './Map.vue'

  export default {
    name: 'Rooms',
    components: {
        Map
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>