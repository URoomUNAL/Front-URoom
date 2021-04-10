<template>
  <b-container>
    <b-row>
      <b-col class="mb-3">
        <h1 class="primary">Inicia sesión</h1>
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" align-content="center">
      <b-col class="form-width">
        <b-form @submit="OnSubmit">
          <b-container>
            <b-row class="justify-content-md-center">
              <b-col lg="6">
                <b-form-input label="Correo" v-model="form.email" placeholder="Correo" type="email" required/>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col lg="6">
                <b-form-input label="Contraseña" v-model="form.password" placeholder="Contraseña" type="password" required class="mt-3"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <b-button variant="primary" class="mt-3 col-lg-6" type="submit">Iniciar sesión</b-button>
              </b-col>
            </b-row>
            <hr/>
            <b-row style="white-space: pre;" class="justify-content-md-center mb-3 col-8 offset-2">
              <b-col md="12" lg="5" pd="0">
                <b-button variant="google" class="mt-1 col-12"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Google</b-button>
              </b-col>
              <b-col md="12" lg="5" pd="0">
                <b-button variant="facebook" class="mt-1 col-12"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Facebook</b-button>
              </b-col>
            </b-row>
            <!--<b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>-->
          </b-container>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import AuthService from '../services/principal_services'

export default {
  name: 'LogIn',
  methods: {
    OnSubmit(){
      AuthService.sign_in(this.form);
    }
  },
  data(){
    return{
      form: {
        email: '',
        password: ''
      }
    }
  }
  
}
</script>
