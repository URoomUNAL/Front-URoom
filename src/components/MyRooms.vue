<template>
  <b-container>
    <b-row class="pb-5">
      <b-col>
        <h1 class="primary">Mis habitaciones</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert v-model="alert.show" variant="danger" dismissible>
          {{alert.message}}
        </b-alert>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col lg="8">
        <b-button block variant="primary" to="/AddRoom">Añade una Habitación</b-button>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <CardRoom v-if="rooms" :posts="rooms"/>
        <h2 class="my-5" v-if="!rooms">Aún no has creado tu primera publicación ¿Qué estás esperando?</h2>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
import LocalService from "../services/local-services.js"
import CardRoom from "./CardRoom.vue"

  export default {
    data(){
      return{
        rooms: null,
        alert: {
          show: false,
          message: ''
        }
      }
    },
    async created(){
      this.rooms = await LocalService.getMyRooms();
    },
    components: {
      CardRoom
    }
  }
</script>