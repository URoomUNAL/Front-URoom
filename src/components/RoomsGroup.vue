<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col v-for="post in posts" :key="post.id" xl="4" md="6" sm="12" class="pr-4">
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
          <b-card-text class="text-center"> 
            <b-button v-on:click="getCompletePost(post.id)" block variant="primary">Ver Publicación</b-button>      
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>


  export default {
    props:['posts'],
    data(){
      return {
        post: ''
      }
    },
    name: 'RoomsGroup',
    methods: {
      getFormatPrice(price){
        return "$ " + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
      },
      getCompletePost(id){  
        this.$router.push({ name: 'Post', params: {id: id}});
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
h4 {
  color: var(--primary);
}
</style>