<template>
    <b-container class="col-md-8 offset-md-2 col-12 ">
      <b-row align-h="center" class="my-4">
        <b-col v-for="marker in markers" sm="12" md="6" class="pr-4" :key = marker.id>
        <b-card
            
            :img-src="marker.main_img"
            img-alt="Image"
            img-top
            justify="left"
            class="text-left">
            <b-card-title class = "text-center">
              {{marker.title}}
            </b-card-title>
             <b-card-text>
              <strong>Dirección:</strong> {{marker.address}} 
            </b-card-text>
            <b-card-text>
              <strong>Descripción:</strong>  {{marker.description}}
            </b-card-text>
            <b-card-text>
              <strong>Precio:</strong> {{getFormatPrice(marker.price)}}
            </b-card-text>

            <b-card-text h3>
              <strong>Servicios:</strong>
              <span v-for="(service, index) in marker.services" :key="index">
                <span>{{service.name}}</span><span v-if="index+1 < marker.services.length">, </span>
              </span>
            </b-card-text>
            <b-card-text>
              <strong>Normas:</strong>
              <span v-for="(rule, index) in marker.rules" :key="index">
                <span> {{rule.name}}</span><span v-if="index+1 < marker.rules.length">, </span>
              </span>            
            </b-card-text>
            <div>
              <b-card-text  v-if="marker.score" class ="my-2"><strong> Calificaión:</strong>  <b-form-rating v-model="marker.score" readonly show-value show-value-max inline no-border></b-form-rating>
              </b-card-text>
              <b-card-text v-if="!marker.score">Esta publiación no tiene calificaciones</b-card-text>
            </div>
          <b-row>
            <b-col>
              <b-button variant="primary">Editar Publicación</b-button>
            </b-col>
            <b-col>
              <b-button v-if="marker.is_active" variant="facebook">Ocultar</b-button>
              <b-button v-if="!marker.is_active" variant="google">Activar</b-button>
            </b-col>
          </b-row>
        </b-card>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  export default {
    props:['markers', 'num_per_row'],
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
        this.toMatrix();
      }
    }
  }
</script>
<style>
.card {
    /* max-width: calc(33.33333% - 30px); */
    margin-bottom: 10px;
    border-radius: 20px;

} 
</style>