<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col v-for="marker in markers" :key=marker.id xl="4" md="6" sm="12" class="pr-4">
        <b-card :title="marker.title" :img-src="marker.main_img" img-alt="Card Image" img-top class="text-left" title-text-variant="primary">
          <b-card-text>
            <p>{{marker.address}}</p>
          </b-card-text>
          <b-card-text>
            <strong>Precio:</strong>{{getFormatPrice(marker.price)}}
          </b-card-text>
          <b-card-text>
            <strong>Servicios:</strong>
            <b-tag v-for="service in marker.services" :key="service" no-remove variant="primary" class="ml-1">{{service.name}}</b-tag>
          </b-card-text>
          <b-card-text>
            <strong>Normas:</strong>
            <b-tag v-for="rule in marker.rules" :key="rule" no-remove variant="primary" class="ml-1">{{rule.name}}</b-tag>
          </b-card-text>
          <b-card-text class="text-center">  
            <b-form-rating class="align-items-center" v-if="marker.score" v-model="marker.score" readonly show-value inline no-border/>
            <p v-if="!marker.score">Esta publicación aún no tiene calificaciones</p>
          </b-card-text>
          <b-card-text class="text-center"> 
            <b-button block variant="primary" >Ver Publicación</b-button>      
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    props:['markers'],
    name: 'RoomsGroup',
    components: {
    },
    data() {
      return {
        rows: ''
      }
    },
    created(){
        
    },
    methods: {
      getFormatPrice(price){
        return "$ " + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
      }
    },
    watch: { 
      markers: function(newVal) { 
        this.markers = newVal;
      }
    }
  }
</script>
<style>
.card {
    margin-bottom: 10px;
    border-radius: 20px;
} 
h4 {
  color: var(--primary);
}
</style>