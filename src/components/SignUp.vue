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
              <b-col lg="6">
                <b-form-input label="Correo" v-model='form.email' placeholder="Correo" type="email" required/>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col lg="6">
                <b-form-input type='password' label="Contraseña" v-model='form.password' placeholder="Contraseña" class="mt-3" required/>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col lg="6">
                <b-form-input type='password' label="Confirmar contraseña" v-model='form.confirm' placeholder="Confirmar contraseña" class="mt-3" required/>
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
              <b-col sm='12' md='6' lg='6' xl='6'>
                <p class="mt-2">Al presionar el siguiente botón estás aceptando los <a class="primary" href='/'>términos y condiciones</a>.</p>
              </b-col>
            </b-row>
            <b-row class="justify-content-md-center">
              <b-col v-if="error" sm='12' md='12' lg='12' xl='12'>
              <b-alert  v-model="error"  variant="danger" dismissible>
                  {{mistake}}
              </b-alert>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="12">
                <b-button variant="primary" class="mt-3 col-lg-6" type="submit">Regístrate</b-button>
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
        "email": '',
        "password": '',
        "confirm": '',
        "selected": ''   
      },
      samePassword: '',
      error: false,
      mistake: ''
    }
  },
  methods: {
      handleSubmit(){
        
        if (this.form.password != this.form.confirm){
          this.error=true
          this.mistake = 'Las contraseñas no coinciden'
        }else if(this.form.password.length<6 || this.form.password.length>=20){
          this.error=true
          this.mistake = 'Las contraseña debe estar entre 6-20 caracteres'
        }else if(this.isNumeric(this.form.password) || this.isAlpha(this.form.password)){
          this.error= true
          this.mistake= 'Las contraseña debe contener al menos un número y una letra.'
        }else{
          const data = {
            email: this.form.email,
            password: this.form.password,
            selected: this.form.selected
          }
          this.$router.push({ name: 'RegistroData', params: {user: data}})
        }
      },
      isNumeric( str ) { 
        return /^[0-9]+$/.test(str); 
      },
      isAlpha( str ) { 
        return /^[A-Za-z]+$/.test(str); 
      }

  }
}
</script>