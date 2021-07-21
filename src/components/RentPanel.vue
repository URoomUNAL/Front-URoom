<template>
  <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
    <b-container>
      <h3 class="primary text-left mt-4"> Elige a quien estás arrendando la habitación </h3>
      <b-row class="justify-content-md-center">
        <b-col md="12" lg="6">
          <b-alert v-model="alert.show" variant="danger" dismissible>
              {{alert.message}}
          </b-alert>
        </b-col>
      </b-row>
      <b-form @submit.prevent="OnSubmit">
        <b-row class="mt-4">
            <b-form-select v-model="fields.selected" :options="fields.options" :disabled="form.anonymous"/>
        </b-row>
        <b-row class="mt-4">
            <b-form-checkbox v-model="form.anonymous"/>
            <p> La persona a la cual estás arrendando no aparece en la lista </p>
        </b-row>
        <b-row align-h="center" align-v="center">
            <b-button type="submit" variant="primary" class="mt-3 text-center">Arrendar a persona</b-button>
        </b-row>
      </b-form>
    </b-container>
  </b-overlay>
</template>

<script>
import PostServices from '../services/post-services.js'

export default {
  name: "RentPanel",
  props:
      ['idPost']
  ,
  data(){
    return{
      alert: {
        show: false,
        message: ''
      },
      fields: {
        loading: false,
        options: [],
        selected: null
      },
      form: {
        anonymous: false,
        post_id: 0
      }
    }    
  },
  methods: {
    OnSubmit(){
      var self = this;
      this.fields.loading = true;
      PostServices.RentRoom(this.idPost, self.anonymous ? null : self.fields.selected.id)
        .then(function(response){
          console.log(response);
          self.fields.loading = false;
          self.$router.go();
          //self.$emit("rent", true);
        })
        .catch(function(error){
          if(error.response){
            self.alert.message = error.response.data;
          }else if(error.request){
            self.alert.message = 'No se ha recibido respuesta del servidor, Intentalo de nuevo más tarde.';
          }
          self.alert.show = true;
          self.fields.loading = false;
        }
      );
    }
  },
  watch: {
      idPost(newValue, oldValue){
          console.log(newValue + oldValue);
      }
  },
  created(){
    var self = this;
    this.fields.loading = true;
    PostServices.GetInterestedInPost(this.idPost)
      .then(function(response){
        console.log(response.data);
        self.fields.options = [];
        var response_options = response.data;
        response_options.forEach(element => {
          self.fields.options.push({value: element, text: element.name});
        });
        self.fields.loading = false;
      }).catch(function(error){
        console.log(error);
      }
    );
  }
}
</script>