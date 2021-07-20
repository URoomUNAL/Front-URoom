<template>
  <b-container>
    {{idPost}}
    <b-row align-h="center" align-v="center" class="my-4">
      <b-col xl="10" md="10" sm="10" class="pr-4">
        <b-card :title="student.name" :img-src="student.img" img-width="370rm" img-alt="Card Image" img-left class="text-left" title-text-variant="primary">
            <b-form @submit.prevent="calification()">
            
            <b-form-rating @change="value(index)" variant="warning" required v-model="student.score"></b-form-rating>
            <b-row class="mt-3">
              <b-col sm="12" md="12" class="text-center">
                  <b-form-textarea
                  id="textarea"
                  v-model="student.comment"
                  placeholder="Añade un comentario calificando al estudiante."
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
              <b-col sm="12" md="12">
                <b-button v-on:click="calification()" block variant="primary">Calificar</b-button>      
              </b-col>
            </b-row>
            </b-form>
        </b-card>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
  export default {
    props:['idPost'],
    data(){
      return {
        post: '',
        alert: {
          message: '',
          show: ''
        }
      }
    },
    name: 'CostumerRate',
    methods: {
      calification(index){
        console.log(index)
      }
    },
    watch: { 
      student: function(newVal) { 
        this.student = newVal;
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