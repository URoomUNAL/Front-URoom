<template>
  <b-container>
    <b-row>
      <b-col class="mb-3">
        <h1 class="primary">Regístrate</h1>
        </b-col>
    </b-row>
    <b-row align-v="center" align-h="center">
      <b-col class="form-width">
        <b-form @submit.prevent="handleSubmit">
          <b-container> 
            <b-row class="justify-content-md-center">
              <b-col sm='6'>
                <b-form-input label="Correo" v-model='form.email' placeholder="Correo" type="email" required/>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col sm='6'>
                <b-form-input label="Contraseña" v-model='form.password' placeholder="Contraseña" class="mt-3" required/>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col sm='6'>
                <b-form-input label="Confirmar contraseña" v-model='form.confirm' placeholder="Confirmar contraseña" class="mt-3" required/>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-radio-group required class="mt-3">
                  <b-form-radio>Estudiante</b-form-radio>
                  <b-form-radio>Arrendatario</b-form-radio>
                </b-form-radio-group>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col sm='6'>
                <p class="mt-2">Al presionar el siguiente botón estás aceptando los <a class="primary" href='/'>términos y condiciones</a>.</p>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col v-if="showDismissibleAlert" sm='5'>
              <b-alert  v-model="showDismissibleAlert" variant="danger" dismissible>
                  Las contraseñas no coinciden.
              </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col >
                <b-button variant="primary" class="mb-2 col-6" type="submit">Regístrate</b-button>            
              </b-col>
            </b-row>
            <hr/>
            <b-row class="justify-content-md-center mb-3 col-8 offset-2">
              <b-col sm='5' pd='0'>
                <b-button variant="google" class="mt-1 col-md-12 col-12"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Google </b-button>
              </b-col>
              <b-col sm='5' pd='0'>
                <b-button variant="facebook" class="mt-1 col-md-12 col-12"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Facebook</b-button>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center mb-3 col-8 offset-2">
              
            </b-row>
          </b-container>
        </b-form>
      </b-col>
    </b-row>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
      </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return{
      form: {
        email: '',
        password: '',
        confirm: ''        
      },
      samePasswaord: '',
      showDismissibleAlert: false
    }
  },
  methods: {
      handleSubmit(){
        if (this.form.password != this.form.confirm){
          this.showDismissibleAlert=true
        }else{
          
          this.$router.push('/RegistroData')
        }

      }
  }
}
</script>