<template>
    <b-container class="col-md-10 offset-1 col-12">
      <b-row align-h="center" class="my-4">
        <b-col v-for="marker in markers" xl="4" sm="12" md="6" class="pr-4" :key = marker.id>
        <b-card
            :title="marker.description"
            :img-src="marker.main_img"
            img-alt="Card Image"
            img-top
            class="text-left"
            >
             <b-card-text>
              {{marker.address}} 
            </b-card-text>
            <b-card-text>
              <strong>Precio:</strong> {{getFormatPrice(marker.price)}}
            </b-card-text>

            <b-card-text h3>
              <strong>Servicios:</strong>
              <span v-for="(service, index) in marker.services" :key="index">
                <span> {{service.name}}</span><span v-if="index+1 < marker.services.length">, </span>
              </span>
            </b-card-text>
            <b-card-text>
              <strong>Normas:</strong>
              <span v-for="(rule, index) in marker.rules" :key="index">
                <span> {{rule.name}}</span><span v-if="index+1 < marker.rules.length">, </span>
              </span>            
            </b-card-text>
            <div>
              <b-card-text  v-if="marker.score" class ="my-2">  
                <b-form-rating v-model="marker.score" readonly show-value show-value-max inline no-border>
                </b-form-rating>
              </b-card-text>
              <b-card-text v-if="!marker.score">Esta publicación no tiene calificaciones</b-card-text>
              <b-button variant="primary">Ver Publicación</b-button>
            </div>
          
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
      markers: function(newVal) { // watch it
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
</style>