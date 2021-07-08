<template>
    <b-container>
      <h3 class="primary text-left mt-4"> Crea una pregunta: </h3>
      <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
        <b-form @submit.prevent="OnSubmit">
          <b-textarea id="question" v-model="form.question" placeholder="Escribe con el mayor de los detalles tu pregunta, pronto será respondida por el arrendatario de esta habitación."/>
          <b-button type="submit" variant="primary" class="mt-3">Crear pregunta</b-button>
        </b-form>
      </b-overlay>
    </b-container>
</template>

<script>
import PostServices from '../services/post-services.js'

export default {
  name: "CreateQuestion",
  data(){
    return{
      fields:{
        loading: false
      },
      form: {
        id: this.$route.params.id,
        question: ''
      }
    }    
  },
  methods: {
    OnSubmit(){
      var self = this;
      self.fields.loading = true;
      PostServices.CreateQuestion(this.form)
        .then(function (response) {
          console.log(response);
        }).catch(function(error){
          console.log(error);
        }
      );
    }
  }
}
</script>