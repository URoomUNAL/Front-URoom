<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Mi cuenta</h1>
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
          <b-container class="mb-3">
            <b-row>
              <b-col lg="4">
                <b-row align-h="center" align-v="center">
                  <h2 class="primary my-4">Tu foto</h2>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-avatar :src="fields.photo" size="10rem" class="mb-4 mt-4"/>
                </b-row>
              </b-col>
              <b-col lg="8">
                <b-row align-h="center" align-v="center">
                  <h2 class="primary my-4">Tus datos</h2>
                </b-row>
                <b-row>
                  <b-col md="12">
                    <b-form-group label="Nombre:">
                      <b-form-input v-model="form.name" readonly/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="12">
                    <b-form-group label="Correo:">
                      <b-form-input v-model="form.email" readonly/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Edad:">
                      <b-form-input v-model="form.age" readonly/>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="Celular:">
                      <b-form-input v-model="form.cellphone" readonly/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col align-self="center" class="mt-3 mb-4" md="6">
                    <b-button to="/UpdateData" variant="primary" block >Editar información de tu cuenta.</b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserService from '../services/user-services.js'
  export default {
    props: ['user'],
    name: 'CompleteData',
    data() {
      return {
        fields: {
          loading: false
        },
        form: {
          name: '',
          email: '',
          photo: '',
          cellphone: '',
          age: ''
        },
        alert: {
          show: false,
          message: ''
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
          //form.file = response.data.file;
          self.fields.loading = false;
        }).catch(function(error){
          if(error.response){
            if(error.response.status === 401){
              self.alert.message = 'No estas autorizado para ver esta información.';  
            }else{
              self.alert.message = error.response.data;
            }
            self.alert.show = true;
          }else if(error.request){
            self.alert.message = 'No se ha recibido respuesta del servidor. Intentalo de nuevo más tarde';
            self.alert.show = true;
          }else{
            self.alert.message = 'Ha ocurrido un error desconocido. Intentalo de nuevo más tarde';
          }
          window.scrollTo(0, 0);
          self.fields.loading = false;
        })
    }
  }
</script>