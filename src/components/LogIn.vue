<template>
  <b-collapse accordion="my-accordion" v-model="visible" id="log-in">
    <b-container>
      <b-row>
        <b-col class="mb-3">
          <h1 class="primary">Inicia sesión</h1>
        </b-col>
      </b-row>
      <b-row align-v="center" align-h="center" align-content="center">
        <b-col class="form-width">
          <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
            <b-form @submit.prevent="Login">
              <b-container>
                <b-row class="justify-content-md-center">
                  <b-col md="12" lg="6">
                    <b-alert v-model="alert.show" variant="danger" dismissible>
                        {{alert.message}}
                    </b-alert>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center">
                  <b-col md="12" lg="6">
                    <b-form-input label="Correo" v-model="form.email" placeholder="Correo" type="email" required/>
                  </b-col>
                </b-row>
                <b-row class="justify-content-md-center">
                  <b-col md="12" lg="6">
                    <b-form-input label="Contraseña" v-model="form.password" placeholder="Contraseña" type="password" required class="mt-3"/>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-col md="12" lg="6">
                    <b-button variant="primary" class="mt-3" type="submit" block>Iniciar sesión</b-button>
                  </b-col>
                </b-row>
                <hr/>
                <b-row style="white-space: pre;" align-h="center" align-v="center" class="mb-3">
                  <b-col md="6" lg="3">
                    <b-button variant="google" class="mt-1 col-12"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Google</b-button>
                  </b-col>
                  <b-col md="6" lg="3">
                    <b-button variant="facebook" class="mt-1 col-12"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Facebook</b-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-form>
          </b-overlay>
        </b-col>
      </b-row>
    </b-container>
  </b-collapse>
</template>
<script>

import AuthService from '../services/authentication-services.js'

export default {
  data(){
    return{
      fields: {
        loading: false
      },
      form: {
        email: '',
        password: ''
      },
      alert: {
        show: false,
        message: ''
      },
      visible: false
    }
  },
  methods: {
    Login(){
      var self = this;
      self.fields.loading = true;
      AuthService.LogIn(JSON.stringify(this.form))
        .then(function(response){
          localStorage.setItem("user_email", response.data.email);
          console.log(localStorage.getItem("user_email")); //
          self.visible = !self.visible;
          //alert("Bienvenido, " + response.data.name + ".");
          self.$router.go();
          self.fields.loading = false;
        }).catch(function(error){
          if(error.response){
            self.alert.message = error.response.data;
            self.alert.show = true;
          }else if(error.request){
            self.alert.message = "No se ha recibido respuesta del servidor. Intentalo de nuevo más tarde";
            self.alert.show = true;
          }
          self.fields.loading = false;
        }
      );
    }
  } 
  
}
</script>
