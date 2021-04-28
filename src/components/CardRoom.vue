<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col v-for="marker in markers" :key=marker.id xl="4" md="6" sm="12" class="pr-4">
        <b-card :title="marker.title" :img-src="marker.main_img" img-alt="Card Image" img-top class="text-left" title-text-variant="primary">
          <b-card-text>
            <p>{{marker.address}}</p>
          </b-card-text>
          <b-card-text>
            <strong>Descripción:</strong> {{marker.description}}
          </b-card-text>
          <b-card-text>
            <strong>Precio:</strong> {{getFormatPrice(marker.price)}}
          </b-card-text>
          <b-card-text>
            <strong>Servicios:</strong>
            <b-tag v-for="service in marker.services" :key="service.id" no-remove variant="primary" class="ml-1">{{service.name}}</b-tag>
          </b-card-text>
          <b-card-text>
            <strong>Normas:</strong>
            <b-tag v-for="rule in marker.rules" :key="rule.id" no-remove variant="primary" class="ml-1">{{rule.name}}</b-tag>
          </b-card-text>
          <b-card-text class="text-center">  
            <b-form-rating class="align-items-center" v-if="marker.score" v-model="marker.score" readonly show-value inline no-border/>
            <p v-if="!marker.score">Esta publicación aún no tiene calificaciones</p>
          </b-card-text>
          <b-card-text class="text-center">     
            <b-button variant="primary">Editar Publicación</b-button>
            <b-button v-if="marker.is_active" variant="facebook" type="submit" @click="OnSubmit(marker, false)">Ocultar</b-button>
            <b-button v-if="!marker.is_active" variant="google" type="submit" @click="OnSubmit(marker, true)">Activar</b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PostService from "../services/post-services.js"
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
      },
      OnSubmit(marker, new_active){
        console.log("la habitación es: ", marker)
        console.log("cambiar estado a: ", new_active)
        marker.is_active = new_active
        let room_req = marker
        let save_main_img = marker.main_img
        let save_images = marker.images
        let save_services = marker.services
        let save_rules = marker.rules
        console.log(marker.rules)
        room_req.main_img = null
        room_req.images = []
        room_req.services = []
        room_req.rules = []
        // console.log("miiiii", save_main_img)
        PostService.ActivateDeactivateRoom(room_req)
        marker.main_img = save_main_img
        marker.images = save_images
        marker.services = save_services
        marker.rules = save_rules
      }
      
    },
    watch: { 
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