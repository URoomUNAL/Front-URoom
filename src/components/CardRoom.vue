<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col v-for="post in posts" :key=post.id xl="4" md="6" sm="12" class="pr-4">
        <b-overlay :show="fields.loading && post.id==fields.id" variant="white" spinner-variant="primary">
        <b-card :title="post.title" :img-src="post.main_img" img-alt="Card Image" img-top class="text-left" title-text-variant="primary">
          <b-card-text>
            <p>{{post.address}}</p>
          </b-card-text>
          <b-card-text>
            <strong>Descripción: </strong> {{post.description}}
          </b-card-text>
          <b-card-text>
            <strong>Precio: </strong> {{getFormatPrice(post.price)}}
          </b-card-text>
          <b-card-text>
            <strong>Servicios: </strong>
            <b-container v-if="post.services.length">
              <b-tag v-for="service in post.services" :key="service.id" no-remove pill variant="primary" class="ml-1">{{service.name}}</b-tag>
            </b-container>
            <b-container v-if="!post.services.length">
              <p>Esta publicación no tiene servicios</p>
            </b-container>
          </b-card-text>
          <b-card-text>
            <strong>Normas: </strong>
            <b-container v-if="post.rules.length">
              <b-tag v-for="rule in post.rules" :key="rule.id" no-remove pill variant="primary" class="ml-1">{{rule.name}}</b-tag>
            </b-container>
            <b-container v-if="!post.rules.length">
              <p>Esta publicación no tiene normas</p>
            </b-container>
          </b-card-text>
          <b-card-text class="text-center">  
            <b-form-rating class="align-items-center" v-if="post.score" v-model="post.score" readonly show-value inline no-border/>
            <p v-if="!post.score">Esta publicación aún no tiene calificaciones</p>
          </b-card-text>
          <b-card-text class="text-center">     
            <!-- <div v-if='!favorites'> -->
              <b-button variant="primary">Editar Publicación</b-button>
              <b-button v-if="post.is_active" variant="danger" type="submit" @click="OnSubmit(post, false)">Ocultar</b-button>
              <b-button v-if="!post.is_active" variant="info" type="submit" @click="OnSubmit(post, true)">Activar</b-button>
            <!-- </div> -->
            <!-- <div v-if='favorites'> -->
              <!-- <b-row>
                <b-col sm="12" md="8">
                  <b-button v-on:click="getCompletePost(post.id)" block variant="primary">Ver Publicación</b-button>      
                </b-col>
                <b-col sm="12" md="4">
                  <b-button block variant="danger"><b-icon icon="heart-fill" scale="1"></b-icon>
                  </b-button>      
                </b-col>
              </b-row>
            </div> -->
            <b-toast v-if="post.id==fields.id" id="status" :variant="toast.variant" title="URoom" auto-hide-delay="3000" no-hover-pause static no-close-button>
              {{toast.message}}
            </b-toast>
          </b-card-text>
        </b-card>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PostService from '../services/post-services.js'

  export default {
    props:['posts', 'favorites'],
    name: 'RoomsGroup',
    data(){
      return{
        fields: {
          loading: false,
          id: 0
        },
        toast:{
          message: '',
          variant: ''
        }
      }
    },
    methods: {
      getFormatPrice(price){
        return '$ ' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      },
      OnSubmit(post, new_active){
        post.is_active = new_active;
        let room_req = post;
        let save_main_img = post.main_img;
        let save_images = post.images;
        let save_services = post.services;
        let save_rules = post.rules;
        room_req.main_img = null;
        room_req.images = [];
        room_req.services = [];
        room_req.rules = [];
        var self = this;
        this.fields.loading = true;
        this.fields.id = post.id;
        PostService.ActivateDeactivateRoom(room_req)
        .then(function(response){
          post.main_img = save_main_img;
          self.toast.message = response.data;
          self.toast.variant = 'success';
          self.$bvToast.show('status');
          post.main_img = save_main_img;
          post.images = save_images;
          post.services = save_services;
          post.rules = save_rules;
          self.fields.loading = false;
        }).catch(function(error){
          if(error.response){
            self.toast.message = error.response.data;
          }else if(error.request){
            self.toast.message = 'No se ha recibido una respuesta del servidor. Intentelo más tarde';
          }
          self.toast.variant = 'danger';
          self.fields.loading = false;
          self.$bvToast.show('status');
        });
        post.main_img = save_main_img;
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