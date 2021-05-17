<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Completa tu registro</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert v-model="alert.show" variant="danger" dismissible>
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
                    <b-col md="6">
                      <b-form-group label="Nombres:" description="¿Qué estas esperando?">
                        <b-form-input v-model="form.name" placeholder="Ingresa tus nombres" required/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="Apellidos:" description="Usa tus datos reales.">
                        <b-form-input v-model="form.surname" placeholder="Ingresa tus apellidos" required />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <b-form-group label="Correo:" description="No compartiremos tu información.">
                        <b-form-input v-model="form.email" type="email" placeholder="Ingresa tu correo" required value="test@test.com"/>
                      </b-form-group>
                    </b-col>
                    <b-col md="6">
                      <b-form-group label="Celular:" description="">
                        <b-form-input v-model="form.cellphone" type="tel" placeholder="Ingresa tu celular" required/>
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
                      <b-button variant="primary" block type="submit" >Completar registro</b-button>
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
  import AuthService from '../services/authentication-services.js'
  import filetoblob from '../libs/file-to-blob.js'
  export default {
    props: ['user'],
    name: 'CompleteData',
    data() {
      return {
        fields: {
          loading: false,
          photo: null
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
          message: ''
        }
      }
    },
    created(){
      var self = this;
      if(!this.user){
        this.$router.push('/')
          .then(function(){
            self.$router.go();
          });
      }else{
        this.form.email = this.user.email;
        this.form.password = this.user.password;
        this.is_student.email = this.user.selected;
      }
    },
    methods: {
      onSubmit() {
        var self = this;
        self.fields.loading = true;
        AuthService.SignUp(JSON.stringify(this.form))
        .then(function(){
          self.fields.loading = false;
          self.$router.push('/')
            .then(function(){
              self.$router.go();
            })
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