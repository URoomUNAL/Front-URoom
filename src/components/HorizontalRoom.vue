<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col v-for="(post,index) in posts" :key="post.rent_id" xl="10" md="10" sm="10" class="pr-4">
        <b-card :title="post.title" :img-src="post.main_img" img-width="370rm" img-alt="Card Image" img-left class="text-left" title-text-variant="primary">
          <div v-if="!post.is_rated && !post.calification">
            <b-form @submit.prevent="calification(index)">
            <b-alert v-model="posts[index].show" variant="danger" >
                {{posts[index].comment}}
            </b-alert>
            <b-card-text>
              <p>{{post.address}}</p>
            </b-card-text>
            <b-card-text>
              <strong>Precio: </strong>{{getFormatPrice(post.price)}}
            </b-card-text>
            <b-card-text>
            </b-card-text>
            <b-form-rating v-if="post.rent_status=='ENDED'" @change="value(index)" variant="warning" required v-model="posts[index].score"></b-form-rating>
            <b-form-rating v-if="post.rent_status!='ENDED'" @change="value(index)" variant="warning" required v-model="default_score" disabled></b-form-rating>
            <b-row class="mt-3">
              <b-col sm="12" md="12" class="text-center">
                  <b-form-textarea v-if="post.rent_status=='ENDED'"
                  id="textarea"
                  v-model="posts[index].comment"
                  placeholder="Añade un comentario calificando a la residencia."
                  rows="3"
                  max-rows="6"
                  required
                  >
                  </b-form-textarea>                  

                  <b-form-textarea v-if="post.rent_status!='ENDED'"
                  id="textarea"
                  v-model="posts[index].comment"
                  placeholder="Añade un comentario calificando a la residencia."
                  rows="3"
                  max-rows="6"
                  required
                  disabled
                  >
                  </b-form-textarea> 
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="6" class="text-center">
                <h4>Pros</h4>
                 <b-form-textarea v-if="post.rent_status=='ENDED'"
                  id="textarea"
                  v-model="posts[index].pros"
                  placeholder="Pros."
                  rows="3"
                  max-rows="6"
                  ></b-form-textarea>
                  <b-form-textarea v-if="post.rent_status!='ENDED'"
                  id="textarea"
                  v-model="posts[index].pros"
                  placeholder="Pros."
                  rows="3"
                  max-rows="6"
                  disabled
                  ></b-form-textarea>
              </b-col>
              <b-col sm="12" md="6" class="text-center">
                <h4>Contras</h4>
                  <b-form-textarea v-if="post.rent_status=='ENDED'"
                  id="textarea"
                  v-model="posts[index].cons"
                  placeholder="Contras."
                  rows="3"
                  max-rows="6"
                  ></b-form-textarea>
                  <b-form-textarea v-if="post.rent_status!='ENDED'"
                  id="textarea"
                  v-model="posts[index].cons"
                  placeholder="Contras."
                  rows="3"
                  max-rows="6"
                  disabled
                  ></b-form-textarea>
                  
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="12" md="6">
                <b-button type="submit" v-if="post.rent_status=='ENDED'" block variant="primary">Calificar</b-button>    
                <b-button type="submit" v-if="post.rent_status!='ENDED'" block variant="primary" disabled>Calificar</b-button>      
              </b-col>
              <b-col sm="12" md="6">
                <b-button v-on:click="getCompletePost(post.id)" block variant="primary">Ver Publicación</b-button>      
              </b-col>
            </b-row>
            </b-form>
          </div>
          <div v-if="post.is_rated">
            <b-card-text>
              <p>{{post.address}}</p>
            </b-card-text>
            <b-card-text>
              <strong>Precio: </strong>{{getFormatPrice(post.price)}}
            </b-card-text>
            <b-card-text>
            </b-card-text>
            
            <b-form-rating readonly show-value variant="warning" required v-model="posts[index].calification.score"></b-form-rating>
            <b-row class="mt-3">
              <b-col sm="12" md="12">
                <p> <strong>Comentario:</strong>  {{posts[index].calification.comment}}</p> 
                  
              </b-col>
            </b-row>
            <b-row class="mt-3" >
              <b-col sm="12" md="6" class="text-center">
                <h4>Pros</h4>
                  <div v-if ="!posts[index].calification.pros" >
                    <p>No indicó pros</p> 
                  </div>
                  <div v-if="posts[index].calification.pros">
                    <p>{{posts[index].calification.pros}}</p> 
                  </div>
              </b-col>
              <b-col sm="12" md="6" class="text-center" >
                  <h4 md="12">Contras</h4>
                  <div v-if ="!posts[index].calification.cons" >
                    <p>No indicó contras</p> 
                  </div>
                  <p>{{posts[index].calification.cons}}</p> 
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
        default_score:0,
        alert: {
          message: '',
          show: ''
        },
        idx: -1000,
        
      }
    },
    created(){
      console.log(this.posts)
      
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
          this.posts[index].comment = 'Tiene que seleccionar las estrellas.';
          this.posts[index].show = true;
        }else{
          this.posts[index].is_rated = true
          this.posts[index].calification = {
            score: this.posts[index].score,
            pros: this.posts[index].pros,
            cons: this.posts[index].cons,
            comment: this.posts[index].comment
          }
          var form = {
           post_id: this.posts[index].id,
           user_username: (JSON.parse(localStorage.getItem('user')).email),
           score: this.posts[index].score,
           comment: this.posts[index].comment,
           pros: this.posts[index].pros,
           cons: this.posts[index].cons
          }
          console.log(form)
          UserService.RateRoom(form);
          this.escogido = form
          this.posts[index].is_rated = true
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