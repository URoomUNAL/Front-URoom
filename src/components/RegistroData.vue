<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Completa tu registro</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-4">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-container class="mb-3">
            <b-row>
              <b-col lg="4">
                <b-row align-h="center" align-v="center">
                  <h2 class="primary my-4">Tu foto</h2>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-avatar src="" size="8rem" class="mb-2"/>
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
              <pre class="m-0">{{ user }}</pre>
            </b-card>-->

          </b-container>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  
  const axios = require('axios'); //El que hace peticiones http
  export default {
    props: ['user'],
    data() {
      return {
        form: {
          email: this.user.email,
          name: '',
          apellido: '',
          checked: [],
          file1: null,
          password: this.user.password,
          cellphone: String(parseInt(Math.random() * (3200000000 - 3000000000) + 3000000000)),
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        var myForm = this.form
        //alert(typeof myForm)
        alert(JSON.stringify(this.form))
        //Petición post
        
        axios.post('http://localhost:9000/SignIn', myForm)
          .then(function (response) {
            console.log(myForm)
            console.log(response)
            
          })
          .catch(function (error) {
            console.log("no perri algo ásó")
            console.log(error);
          });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.apellido = ''
        this.form.cellphone = Math.random() * (3200000000 - 3000000000) + 3000000000
        this.file1 = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      clearFiles() {
        this.$refs['file-input'].reset()
      }
    }
  }
</script>