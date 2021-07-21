<template>
  <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
    <b-container>
      <h3 class="primary text-left mt-4"> Escribe una pregunta: </h3>
      <b-form @submit.prevent="OnSubmit">
        <b-row>
          <b-textarea rows="5" id="question" v-model="form.question" placeholder="Escribe con el mayor de los detalles tu pregunta, pronto será respondida por el arrendatario de esta habitación."/>
        </b-row>
        <b-row>
          <b-form-checkbox v-model="form.anonymous"/>
          <p> Enviar pregunta como anónimo </p>
        </b-row>
        <b-row align-h="center">
          <b-button type="submit" variant="primary" class="mt-3 text-center">Añadir pregunta</b-button>
        </b-row>
      </b-form>
    </b-container>
  </b-overlay>
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
        anonymous: false,
        post_id: this.$route.params.id,
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
          self.$bvModal.hide('new-question');
          self.$router.go();
        }).catch(function(error){
          console.log(error);
          self.$bvModal.hide('new-question');
          self.$router.go();
        }
      );
    }
  }
}
</script>