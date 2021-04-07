<template>
  <b-container>
    <b-row>
      <b-col class="mb-3">
        <h1 class="primary">Regístrate</h1>
        </b-col>
    </b-row>
    <b-row align-v="center" align-h="center">
      <b-col class="form-width">
        <b-form>
          <b-container>
            <b-row>
              <b-col>
                <b-form-input label="Correo" placeholder="Correo" type="email" required/>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-input label="Contraseña" placeholder="Contraseña" class="mt-3" required/>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-input label="Confirmar contraseña" placeholder="Confirmar contraseña" class="mt-3" required/>
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
            <b-row>
              <b-col>
                <p class="mt-3">Al presionar el siguiente botón estás aceptando los <a class="primary" href='/'>términos y condiciones</a>.</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button to='/RegistroData' variant="primary" class="px-6 mb-2" type="submit">Regístrate</b-button>            
                </b-col>
            </b-row>
            <hr/>
            <b-row class="mb-3">
              <b-col>
                <b-button variant="google" class="mt-3"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Registrate con Google</b-button>
              </b-col>
              <b-col>
                <b-button variant="facebook" class="mt-3"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Registrate con Facebook</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'SignUp',
  props: {},
  components: {

  }
}
</script>