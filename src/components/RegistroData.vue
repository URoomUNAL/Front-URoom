<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="primary mb-3">Completa tu registro</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-container>
            <b-row cols="2">
              <b-col>
                <b-row align-h="center" align-v="center">
                  <h2 class="primary mb-4">Tu foto</h2>
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
              <b-col>
                <b-row align-h="center" align-v="center">
                  <h2 class="primary mb-4">Tus datos</h2>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-form-group id="input-group-2" label="Nombres:" label-for="input-2">
                      <b-form-input id="input-2" v-model="form.name" placeholder="Ingresar nombres" required/>
                  </b-form-group>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-form-group id="input-group-1" label="Correo:" label-for="input-1" description="No compartiremos tu email con nadie más.">
                    <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Ingresar correo" required/>
                  </b-form-group>
                </b-row>
              </b-col>
              
            </b-row>
            <!--<div class="col-sm">
              <b-form-group id="input-group-3" label="Apellidos:" label-for="input-3" 
                description="Usa tus datos reales.">
                <b-form-input
                id="input-3"
                v-model="form.apellido"
                placeholder="Ingresar apellidos"
                required
                />
              </b-form-group>
                <label for="edad">Edad:</label>
                <b-form-spinbutton id="edad" v-model="value" min="18" max="100"></b-form-spinbutton>
                <p>Tienes que ser mayor de edad. (a revisar)</p>
            </div>
            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"/>
            </b-form-group>
            <div id="enviar">
              <b-button variant="primary" type="submit">Confirmar</b-button>
              <b-button variant="danger" type="reset">Reset</b-button>
            </div>
            <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
            </b-card>
            -->

          </b-container>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  
  const axios = require('axios'); //El que hace peticiones http
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          apellido: '',
          checked: [],
          file1: null,
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