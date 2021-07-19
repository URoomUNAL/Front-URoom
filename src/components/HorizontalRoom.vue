<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col  v-for="(post,index) in posts" :key="post.id" xl="10" md="10" sm="10" class="pr-4">
        <b-card :title="post.title" :img-src="post.main_img" img-width="370rm" img-alt="Card Image" img-left class="text-left" title-text-variant="primary">
          <div v-if="!post.calification">
            <b-form @submit.prevent="calification(index)">
            <b-alert v-model="posts[index].show" variant="danger" >
                {{posts[index].message}}
            </b-alert>
            <b-card-text>
              <p>{{post.address}}</p>
            </b-card-text>
            <b-card-text>
              <strong>Precio: </strong>{{getFormatPrice(post.price)}}
            </b-card-text>
            <b-card-text>
            </b-card-text>
            
            <b-form-rating @change="value(index)" variant="warning" required v-model="posts[index].score"></b-form-rating>
            <b-row class="mt-3">
              <b-col sm="12" md="12" class="text-center">
                  <b-form-textarea
                  id="textarea"
                  v-model="posts[index].comment"
                  placeholder="Añade un comentario calificando a la residencia."
                  rows="3"
                  max-rows="6"
                  required
                  >
                  </b-form-textarea>
                  
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="6" class="text-center">
                <h4>Pros</h4>
                 <b-form-textarea
                  id="textarea"
                  v-model="posts[index].pros"
                  placeholder="Pros."
                  rows="3"
                  max-rows="6"
                  ></b-form-textarea>
              </b-col>
              <b-col sm="12" md="6" class="text-center">
                <h4>Contras</h4>
                  <b-form-textarea
                  id="textarea"
                  v-model="posts[index].contras"
                  placeholder="Contras."
                  rows="3"
                  max-rows="6"
                  ></b-form-textarea>
                  
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="6">
                <b-button type="submit" block variant="primary">Calificar</b-button>      
              </b-col>
              <b-col sm="12" md="6">
                <b-button v-on:click="getCompletePost(post.id)" block variant="primary">Ver Publicación</b-button>      
              </b-col>
            </b-row>
            </b-form>
          </div>
          <div v-if="post.calification">
            <b-card-text>
              <p>{{post.address}}</p>
            </b-card-text>
            <b-card-text>
              <strong>Precio: </strong>{{getFormatPrice(post.price)}}
            </b-card-text>
            <b-card-text>
            </b-card-text>
            
            <b-form-rating readonly show-value variant="warning" required v-model="posts[index].score"></b-form-rating>
            <b-row class="mt-3">
              <b-col sm="12" md="12">
                <p> <strong>Comentario:</strong>  {{posts[index].comment}}</p> 
                  
              </b-col>
            </b-row>
            <b-row class="mt-3" >
              <b-col sm="12" md="6" class="text-center">
                <h4>Pros</h4>
                  <div v-if ="typeof posts[index].pros == 'undefined'" >
                    <p>No indicó pros</p> 
                  </div>
                  <p>{{posts[index].pros}}</p> 
              </b-col>
              <b-col sm="12" md="6" class="text-center" >
                  <h4 md="12">Contras</h4>
                  <div v-if ="typeof posts[index].contras == 'undefined'" >
                    <p>No indicó contras</p> 
                  </div>
                  <p>{{posts[index].contras}}</p> 
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="12">
                <b-button v-on:click="getCompletePost(post.id)" block variant="primary">Ver Publicación</b-button>      
              </b-col>
            </b-row>

          </div>
        </b-card>
      </b-col>
    </b-row>
    <div v-if="escogido">
      {{escogido}}
    </div>
    
  </b-container>
</template>

<script>
import UserService from '../services/user-services.js'
  export default {
    props:['posts'],
    data(){
      return {
        post: '',
        variable: false,
        escogido:'',
        alert: {
          message: '',
          show: ''
        },
        idx: -1000,
        
      }
    },
    name: 'HorizontalRoom',
    methods: {
      getFormatPrice(price){
        return '$ ' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      },
      getCompletePost(idx){  
        this.$router.push({ name: 'Post', params: {id: idx}});
      },
      calification(index){
        this.idx = index;
        this.escogido = this.posts[index];
        if(!this.posts[index].score){
          this.posts[index].message = 'Tiene que seleccionar las estrellas.';
          this.posts[index].show = true;
        }else{
          var form = {
           post_id: this.posts[index].id,
           user_username: (JSON.parse(localStorage.getItem('user')).email),
           score: this.posts[index].score,
           comment: this.posts[index].comment,
           pros: this.posts[index].pros,
           cons: this.posts[index].contras
          }
          console.log(form)
          UserService.RateRoom(form);
          this.escogido = form
          this.posts[index].calification = true
        }
      },
      value(index){
        this.posts[index].show = false;
        
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