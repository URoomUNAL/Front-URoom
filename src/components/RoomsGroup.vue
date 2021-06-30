<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col id="favs" v-for="(post, index) in posts" :key="post.id" xl="4" md="6" sm="12" class="pr-4">
        <b-card :title="post.title" :img-src="post.main_img" img-alt="Card Image" img-top class="text-left" title-text-variant="primary">
          <b-card-text>
            <p>{{post.address}}</p>
          </b-card-text>
          <b-card-text>
            <strong>Precio: </strong>{{getFormatPrice(post.price)}}
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

          <b-row>
            <b-col sm="12" md="8">
              <b-button v-on:click="getCompletePost(post.id)" block variant="primary">Ver Publicación</b-button>      
            </b-col>
            <b-col sm="12" md="4">
              <div v-if="!favorites">
                <b-button @mouseover="ishovered = post.id" @mouseleave="ishovered = ''" v-on:click="addFavorites(post.id, index)" block variant="danger"><b-icon v-if="ishovered==post.id || post.is_favorite " icon="heart-fill" scale="1"></b-icon>
                  <b-icon v-if="ishovered!=post.id && !post.is_favorite" icon="heart" scale="1"></b-icon></b-button>
              </div>
              <div v-if="favorites">
                <b-button @click="$bvModal.show('modal_'+post.id)" block variant="danger"><b-icon icon="heart-fill" scale="1"></b-icon>
                <b-modal 
                header-class="my-class"
                :id="'modal_'+post.id"
                @ok="removeFavorite(post.id, index)">
                <h2>{{post.title}}</h2>  
                ¿Seguro que desea eliminar el post de sus <strong>favoritos</strong>?
                </b-modal>
                {{quit_favorite}}
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PostService from '../services/post-services.js'
  export default {
    props:['posts', 'favorites'],
    data(){
      return {
        post: '',
        ishovered: '',
        quit_favorite: ''
      }
    },
    name: 'RoomsGroup',
    methods: {
      getFormatPrice(price){
        return '$ ' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      },
      getCompletePost(idx){  
        this.$router.push({ name: 'Post', params: {id: idx}});
      },
      async addFavorites(idx, index){  
        if(this.posts[index].is_favorite){
          this.$root.$emit("bv::show::modal", 'modal_'+idx);
          this.posts[index].is_favorite = false;
          await PostService.removeFavorite(idx)
        }else{
          PostService.addFavorites(idx);
          this.posts[index].is_favorite = true;
        }
      },
      Hover(value) {
        this.ishovered = value
      },
      async removeFavorite(id, index){
        this.posts.splice(index, 1)
        await PostService.removeFavorite(id)
      }
       
    },
    watch: { 
      posts: function(newVal) { 
        this.posts = newVal;
      }
    }
  }
</script>

<style>

.card {
    margin-bottom: 10px;
    border-radius: 20px;
} 
h2, h4 {
  color: var(--primary);
}

.modal-dialog > .modal-content{
  background-color: #ffffff !important;
  border-radius: 20px;
}

</style>