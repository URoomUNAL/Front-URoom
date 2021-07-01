<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Actualiza tu información personal</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert v-model="alert.show" :variant="alert.variant" dismissible>
          {{alert.message}}
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4">
        <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
          <b-form @submit.prevent="onSubmit">
            <b-container class="mb-3">
              <b-row>
                <b-col lg="4">
                  <b-row align-h="center" align-v="center">
                    <h2 class="primary my-4">Tu foto</h2>
                  </b-row>
                  <b-row align-h="center" align-v="center">
                    <b-avatar :src="fields.photo" size="10rem" class="mb-4 mt-4"/>
                  </b-row>
                  <b-row align-h="center" align-v="center">  
                    <b-form-file v-model="form.photo" type="file" accept="image/jpeg, image/png" placeholder="Selecciona la imágen." class="mb-2 col-10 text-left"></b-form-file>
                  </b-row>
                </b-col>
                <b-col lg="8">
                  <b-row align-h="center" align-v="center">
                    <h2 class="primary my-4">Tus datos</h2>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <b-form-group id="input-group-1" label="Nombres y Apellidos:" label-for="input-1" description="¿Qué estas esperando?">
                        <b-form-input id="input-1" v-model="form.name" placeholder="Ingresa tus nombres y apellidos" required/>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <b-form-group id="input-group-3" label="Correo:" label-for="input-3" description="No compartiremos tu información.">
                        <b-form-input id="input-3" v-model="form.email" type="email" placeholder="Ingresa tu correo" required value="test@test.com" disabled/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group id="input-group-4" label="Celular:" label-for="input-4" description="">
                        <b-form-input id="input-4" v-model="form.cellphone" type="tel" placeholder="Ingresa tu celular" required/>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <b-form-group id="input-group-5" label="Edad:" label-for="input-5" description="Debes ser mayor de edad.">
                        <b-form-spinbutton id="input-5" v-model="form.age" min="18"></b-form-spinbutton>
                      </b-form-group>
                    </b-col>
                    <b-col align-self="center" class="mt-3 mb-4" md="6">
                      <b-button variant="primary" block type="submit" >Actualizar información</b-button>
                    </b-col>
                  </b-row> 
                </b-col>
              </b-row>
            </b-container>
          </b-form>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import filetoblob from '../libs/file-to-blob.js'
  import AuthService from '../services/authentication-services.js'
  import UserService from '../services/user-services.js'
  export default {
    name: 'UpdateData',
    data() {
      return {
        fields: {
          photo: null,
          loading: false
        },
        form: {
          email: '',
          name: '',
          surname: '',
          photo: null,
          password: '',
          cellphone: '',
          age: '',
          is_student: ''
        },
        alert: {
          show: false,
          variant: '',
          message: '',
        }
      }
    },
    created(){
      var self = this;
      self.fields.loading = true;
      UserService.GetUser()
        .then(function(response){
          self.form.name = response.data.name;
          self.form.email = response.data.email;
          self.form.age = response.data.age;
          self.form.cellphone = response.data.cellphone;
          self.form.is_student = response.data.is_student;
          //self.form.photo = response.data.photo;
          self.fields.loading = false;
        }).catch(function(error){
          if(error.response){
            self.alert.message = error.response.data;
          }else if(error.request){
            self.alert.message = 'No se ha recibido respuesta del servidor. Intentalo de nuevo más tarde';
          }else{
            self.alert.message = 'Ha ocurrido un error desconocido. Intentalo de nuevo más tarde';
          }
          self.alert.show = true;
          self.fields.loading = false;
        }
      );
    },
    methods: {
      onSubmit() {
        var self = this;
        self.fields.loading = true;
        AuthService.ModifyProfile()
        .then(function(response){
          console.log(response); //TODO:
          self.alert.message = 'Se ha actualizado satisfactoriamente la información del usuario.';
          self.alert.show = true;
          self.alert.variant = 'success';
          self.fields.loading = false;
        }).catch(function(error){
          if(error.response){
            self.alert.message = error.response.data;
          }else if(error.request){
            self.alert.message = 'No se ha recibido respuesta del servidor. Intentalo de nuevo más tarde';
          }else{
            self.alert.message = 'Ha ocurrido un error desconocido. Intentalo de nuevo más tarde';
          }
          self.alert.show = true;
          self.alert.variant = 'danger';
          self.fields.loading = false;
        });
      }
    },
    watch : {
      'form.photo'(newValue, oldValue) {
        if(newValue !== oldValue) {
          if(newValue) {
            filetoblob(newValue)
              .then((value) => {
                this.fields.photo = value;
              })
              .catch(() => {
                this.fields.photo = null;
              });
          }else{
            this.fields.photo = null;
          }
        }
      }
    }
  }
</script>
