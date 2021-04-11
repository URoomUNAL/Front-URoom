<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Completa tu registro</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4">
        <b-form @submit.prevent="onSubmit" v-if="show">
          <b-container class="mb-3">
            <b-row>
              <b-col lg="4">
                <b-row align-h="center" align-v="center">
                  <h2 class="primary my-4">Tu foto</h2>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-avatar src="" size="10rem" class="mb-4 mt-4"/>
                </b-row>
                <!--<b-form-file v-model="file1" ref="file-input" class="mb-2" plain></b-form-file>
                <p class="mt-2">Selected file: <b>{{ file ? file.name : '' }}</b></p>-->
                <b-row align-h="center" align-v="center">  
                  <b-button  variant="primary" class="mb-2">Cambiar foto</b-button>
                </b-row>
              </b-col>
              <b-col lg="8">
                <b-row align-h="center" align-v="center">
                  <h2 class="primary my-4">Tus datos</h2>
                </b-row>
                <b-row>
                  <b-col md="6">
                    <b-form-group id="input-group-1" label="Nombres:" label-for="input-1" description="¿Qué estas esperando?">
                      <b-form-input id="input-1" v-model="form.name" placeholder="Ingresa tus nombres" required/>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group id="input-group-2" label="Apellidos:" label-for="input-2" description="Usa tus datos reales.">
                      <b-form-input id="input-2" v-model="form.surname" placeholder="Ingresa tus apellidos" required />
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6">
                    <b-form-group id="input-group-3" label="Correo:" label-for="input-3" description="No compartiremos tu información.">
                      <b-form-input id="input-3" v-model="form.email" type="email" placeholder="Ingresa tu correo" required/>
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
                      <!--<b-form-input id="input-5" v-model="form.age" type="number" min="18" placeholder="Ingresa tu edad" required/>-->
                    </b-form-group>
                  </b-col>
                  <b-col align-self="center" class="mt-3 mb-4" md="6">
                    <b-button variant="primary" block type="submit" >Completar registro</b-button>
                  </b-col>
                </b-row> 
              </b-col>
            </b-row>
            
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>

          </b-container>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import AuthService from '../services/principal_services.js'
  export default {
    props: ['user'],
    data() {
      return {
        form: {
          email: this.user.email,
          name: '',
          surname: '',
          file1: null,
          password: this.user.password,
          cellphone: '',
          age: '',
          is_student: this.user.selected
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        var user = {
          email: this.form.email,
          name: this.form.name + ' ' + this.form.surname,
          password: this.user.password,
          cellphone: this.form.cellphone,
          is_student: this.form.is_student == "true",
          age: this.form.age//,
          //file1: this.form.file1
        }
        //Petición post
        AuthService.register(JSON.stringify(user));
      }
    }
  }
</script>