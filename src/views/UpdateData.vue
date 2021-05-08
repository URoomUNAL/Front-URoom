<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Actualiza tu información personal</h1>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col>
        <b-alert v-model="alert.show" variant="danger" dismissible>
          {{alert.message}}
        </b-alert>
      </b-col>
    </b-row> -->
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
                    <b-avatar src="" size="10rem" class="mb-4 mt-4"/>
                  </b-row>
                  <b-row align-h="center" align-v="center">  
                    <b-form-file type="file" accept=".jpg, .png" placeholder="" class="mb-2 col-10"></b-form-file>
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
                    <!-- <b-col md="6">
                      <b-form-group id="input-group-2" label="Apellidos:" label-for="input-2" description="Usa tus datos reales.">
                        <b-form-input id="input-2" v-model="form.surname" placeholder="Ingresa tus apellidos" required />
                      </b-form-group>
                    </b-col> -->
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
  import AuthService from '../services/authentication-services.js'
  export default {
    name: 'UpdateData',
    data() {
      return {
        fields: {
          loading: false
        },
        form: {
          name: '',
          email: '',
          age: '',
          cellphone: '',
          is_student: ''
        },
        alert: {
          show: false,
          message: ''
        }
      }
    },
    created(){                
        this.form.name = localStorage.getItem('user_name');
        this.form.email = localStorage.getItem('user_email');
        this.form.age = localStorage.getItem('user_age');
        this.form.cellphone = localStorage.getItem('user_cellphone');
        this.form.is_student = localStorage.getItem('user_is_student');
        //this.form.photo = localStorage.getItem("user_photo");
    },
    methods: {
      onSubmit() {
        var user = {
          id: localStorage.getItem('user_id'),
          name: this.form.name,
          email: this.form.email,
          age: this.form.age,
          cellphone: this.form.cellphone,
          is_student: this.form.is_student == "true",
        }
        var self = this;
        self.fields.loading = true;
        AuthService.ModifyProfile(JSON.stringify(user))
        .then(function(response){
          //localStorage.setItem("user_id", self.form.id);
          localStorage.setItem("user_name", self.form.name);
          localStorage.setItem("user_email", self.form.email);
          localStorage.setItem("user_age", self.form.age);
          localStorage.setItem("user_cellphone", self.form.cellphone);
          localStorage.setItem("user_is_student", self.form.is_student);
          localStorage.setItem("user_is_active", self.form.is_active);
          self.fields.loading = false;
          self.alert.message = response.data;
          self.alert.show = true;
          // self.$router.push('/');
        }).catch(function(error){
          if(error.response){
            self.alert.message = error.response.data;
            self.alert.show = true;
          }else if(error.request){
            self.alert.message = "No se ha recibido respuesta del servidor. Intentalo de nuevo más tarde";
            self.alert.show = true;
          }else{
            self.alert.message = "Ha ocurrido un error desconocido. Intentalo de nuevo más tarde";
          }
          self.fields.loading = false;
        });
      }
    }
  }
</script>