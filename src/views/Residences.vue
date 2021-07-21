<template>
  <b-container>
    <b-row class="pb-5">
      <b-col>
        <h1 class="primary">Mis Habitaciones</h1>
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
        <b-button block variant="primary" to="/Rooms">Explora más habitaciones</b-button>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <!-- <CardRoom v-if="rooms && loading==false" :posts="rooms" :favorites="true"/> -->
        <HorizontalRoom v-if="rooms && loading==false" :posts="rooms"/>
        <h2 class="my-5" v-if="!rooms && loading ==false">Aún no has estado en ninguna residencia ¡Ve a explorar!</h2>
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
import HorizontalRoom from '../components/HorizontalRoom.vue'
import PostService from '../services/post-services.js'
  export default {
    name: 'MyResidences',
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
    created(){

      console.log(localStorage.getItem('user'))
      var self = this;
      self.loading = true;
      PostService.GetRatePosts()
        .then(function(response){
          self.rooms = response.data.reverse();
          self.loading = false;
        }
      );
    },
    components: {
        HorizontalRoom
    }
  }
</script>