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
          <!--<<b-card-text>
            <strong>Normas: </strong>
            <b-container v-if="post.rules.length">
              <b-tag v-for="rule in post.rules" :key="rule.id" no-remove pill variant="primary" class="ml-1">{{rule.name}}</b-tag>
            </b-container>
            b-container v-if="!post.rules.length">
              <p>Esta publicación no tiene normas</p>
            </b-container>
          </b-card-text>-->
          <b-card-text>
            <b-row align-h="center">
              <b-col cols="6" class="text-center mt-3" style="border-right: 1px dashed;">
                <strong>Visualizaciones</strong>
                <h3 class="primary">{{post.visits}}</h3>
              </b-col>
              <b-col cols="6" class="text-center mt-3" style="border-left: 1px dashed;">
                <strong> Interesados </strong>
                <h3 class="primary">{{post.interested}}</h3>
              </b-col>
            </b-row>
          </b-card-text>
          <b-card-text class="text-center">  
            <b-form-rating class="align-items-center" v-if="post.score" v-model="post.score" readonly show-value inline no-border/>
            <p v-if="!post.score">Esta publicación aún no tiene calificaciones</p>
          </b-card-text>
          <b-card-text class="text-center">     
              <b-row align-v="center">
                <b-col>
                  <b-button v-on:click="getCompletePost(post.id)" variant="primary" class="mt-2" block>Ver publicación</b-button>
                </b-col>
                
              </b-row>
              <b-row align-v="center">
                <b-col cols="4" sm="6">
                  <b-button variant="secondary" class="mt-2" block><b-icon-pencil-fill class="mr-3"/>Editar</b-button>
                </b-col>
                <b-col cols="4" sm="6">
                  <b-button v-if="post.is_active" variant="danger" type="submit" @click="OnSubmit(post, false)" class="mt-2" block>Ocultar</b-button>
                  <b-button v-if="!post.is_active" variant="info" type="submit" @click="OnSubmit(post, true)" class="mt-2" block>Activar</b-button>
                </b-col>
                <b-col cols="12">
                  <b-button v-if="post.rented" variant="primary" class="mt-2" block @click="OnRent(post)">Arrendar</b-button>
                  <b-button v-if="!post.rented" variant="info" class="mt-2" block @click="OnUnrent(post)">Desarrendar</b-button>
                </b-col>
              </b-row>
            <b-toast v-if="post.id==fields.id" id="status" :variant="toast.variant" title="URoom" auto-hide-delay="3000" no-hover-pause static no-close-button>
              {{toast.message}}
            </b-toast>
          </b-card-text>
        </b-card>
        </b-overlay>
      </b-col>
    </b-row>
    <b-modal title="Arrienda la habitación" id="rent-room" title-class="primary" hide-footer>
      <RentPanel :idPost="fields.id"/>
    </b-modal>
    <b-modal title="Finaliza el arriendo la habitación" id="unrent-room" title-class="primary" hide-footer>
      <CostumerRate :idPost="fields.id"/>
    </b-modal>
  </b-container>
</template>

<script>
import CostumerRate from '../components/CostumerRate.vue'
import PostService from '../services/post-services.js'
import RentPanel from '../components/RentPanel.vue'

  export default {
    props:['posts', 'favorites'],
    name: 'CardRoom',
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
        var self = this;
        this.fields.loading = true;
        this.fields.id = post.id;
        PostService.ActivateDeactivateRoom(post.id)
        .then(function(response){
          self.toast.message = response.data;
          self.toast.variant = 'success';
          self.$bvToast.show('status');
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
      },
      OnRent(post){
        this.$bvModal.show('rent-room');
        this.fields.id = post.id;
      },
      OnUnrent(post){
        this.$bvModal.show('unrent-room');
        this.fields.id = post.id;
      },
      getCompletePost(idx){  
        console.log(JSON.parse(localStorage.getItem('user')).email)
        console.log(this.posts)
        this.$router.push({ name: 'Post', params: {id: idx}});
      }
    },
    components: {
      RentPanel,
      CostumerRate
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