<template>
    
        <b-tabs>
            <b-tab title="Inicio de sesión">
                <b-row>
                    <b-col class="my-3">
                        <h1 class="primary text-center">Inicia sesión</h1>
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
                            <b-col md="12">
                                <b-form-input label="Correo" v-model="form.email" placeholder="Correo" type="email" required/>
                            </b-col>
                            </b-row>
                            <b-row class="justify-content-md-center">
                            <b-col md="12">
                                <b-form-input label="Contraseña" v-model="form.password" placeholder="Contraseña" type="password" required class="mt-3"/>
                            </b-col>
                            </b-row>
                            <b-row align-h="center" align-v="center">
                            <b-col md="12">
                                <b-button variant="primary" class="mt-3" type="submit" block>Iniciar sesión</b-button>
                            </b-col>
                            </b-row>
                            <hr/>
                            <b-row style="white-space: pre;" align-h="center" align-v="center" class="mb-3">
                            <b-col md="12">
                                <b-button variant="google" class="mt-1 col-12"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Google</b-button>
                            </b-col>
                            <b-col md="12">
                                <b-button variant="facebook" class="mt-1 col-12"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Facebook</b-button>
                            </b-col>
                            </b-row>
                        </b-container>
                        </b-form>
                    </b-overlay>
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Registrate">
                <b-container>
                    <b-row class="mt-4">
                        <b-col class="mb-3 text-center">
                            <h1 class="primary">Regístrate</h1>
                        </b-col>
                    </b-row>
                    <b-row align-v="center" align-h="center" align-content="center">
                        <b-col class="form-width">
                        <b-form @submit.prevent="SignUp">
                            <b-container> 
                            <b-row class="justify-content-md-center">
                                <b-col lg="12">
                                <b-alert v-model="alert.show" variant="danger" dismissible>
                                    {{alert.message}}
                                </b-alert>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-md-center">
                                <b-col md="12">
                                <b-form-input label="Correo" v-model="form.email" placeholder="Correo" type="email" required/>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-md-center">
                                <b-col lg="12">
                                <b-form-input type="password" label="Contraseña" v-model="form.password" placeholder="Contraseña" class="mt-3" required/>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-md-center">
                                <b-col lg="12">
                                <b-form-input type="password" label="Confirmar contraseña" v-model="form.confirmPassword" placeholder="Confirmar contraseña" class="mt-3" required/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                <b-form-radio-group required class="mt-3">
                                    <b-form-radio v-model="form.selected" value="true">Estudiante</b-form-radio>
                                    <b-form-radio v-model="form.selected" value="false">Arrendatario</b-form-radio>
                                </b-form-radio-group>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-md-center">
                                <b-col sm="12">
                                <p class="mt-2">Al presionar el siguiente botón estás aceptando los <a class="primary" href="/">términos y condiciones</a>.</p>
                                </b-col>
                            </b-row>
                            <b-row align-h="center" align-v="center">
                                <b-col lg="12">
                                <b-button variant="primary" class="mt-3" type="submit" block>Regístrate</b-button>
                                </b-col>
                            </b-row>
                            <hr/>
                            <b-row style="white-space: pre;" align-h="center" align-v="center" class="mb-3">
                                <b-col md="12">
                                <b-button variant="google" class="mt-1 col-12"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Google</b-button>
                                </b-col>
                                <b-col md="12">
                                <b-button variant="facebook" class="mt-1 col-12"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Facebook</b-button>
                                </b-col>
                            </b-row>
                            </b-container>
                        </b-form>
                        </b-col>
                    </b-row>
                </b-container>
            </b-tab>
        </b-tabs>
    
</template>
<script>
import AuthService from '../services/authentication-services.js'
  export default {
    data() {
    return{
      form: {
        'email': '',
        'password': '',
        'confirmPassword': '',
        'selected': ''   
      },

      visible: false,
      fields: {
        loading: false
      },
      alert: {
        show: false,
        message: ''
      },
    }
  },
  methods: {
      SignUp(){    
        if(this.form.password != this.form.confirmPassword){
          this.alert.message = 'Las contraseñas no coinciden.';
          this.alert.show = true;
        }else if(this.form.password.length < 6 || this.form.password.length >= 20){
          this.alert.message = 'Las contraseña debe tener entre 6 y 20 caracteres.';
          this.alert.show = true;
        }else if(this.isNumeric(this.form.password) || this.isAlpha(this.form.password)){
          this.alert.message = 'La contraseña debe contener por lo menos un número y una letra.';
          this.alert.show = true;
        }else{
          this.alert.show = false;
          let data = {
            email: this.form.email,
            password: this.form.password,
            is_student: this.form.selected
          };
          this.visible = !this.visible;
          this.$router.push({ name: 'CompleteData', params: {user: data}});
        }
      },
      isNumeric(str) { 
        return /^[0-9]+$/.test(str); 
      },
      isAlpha(str) { 
        return /^[A-Za-z]+$/.test(str); 
      },
      Login(){
      var self = this;
      self.fields.loading = true;
      AuthService.LogIn(JSON.stringify(this.form))
        .then(function(response){
          localStorage.setItem('user', JSON.stringify(response.data));
          self.visible = false;
          self.fields.loading = false;
          self.$router.go();
        }).catch(function(error){
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
  }
  }
</script>