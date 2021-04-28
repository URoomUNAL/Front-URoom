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
        <CardRoom v-if="rooms && loading==false" :posts="rooms"/>
        <h2 class="my-5" v-if="!rooms && loading ==false">Aún no has creado tu primera publicación ¿Qué estás esperando?</h2>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mb-5" v-if="loading">
      <b-col align-self="center" class="my-4">
        <b-spinner variant="primary"/>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
import LocalService from "../services/local-services.js"
import CardRoom from "./CardRoom.vue"

  export default {
    name: 'MyRooms',
    data(){
      return{
        loading: true,
        rooms: null,
        alert: {
          show: false,
          message: ''
        }
      }
    },
    async created(){
      this.loading = true;
      this.rooms = await LocalService.getMyRooms();
      this.loading = false;
    },
    components: {
      CardRoom
    }
  }
</script>