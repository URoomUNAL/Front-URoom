<template>
  <b-container>
    <b-row>
      <b-col class="mb-3">
        <h1 class="primary">Inicia sesión</h1>
      </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" align-content="center">
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
                <b-form-input label="Contraseña" placeholder="Contraseña" type="password" required class="mt-3"/>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button variant="primary" class="mt-3" type="submit">Iniciar sesión</b-button>
              </b-col>
            </b-row>
            <hr/>
            <b-row class="mb-3"> 
              <b-col>
                <b-button variant="google" class="mt-3"><b-icon icon="google" font-scale="1.5" class="mr-3"/>Inicia sesíon con Google</b-button>
              </b-col>
              <b-col>
                <b-button variant="facebook" class="mt-3"><b-icon icon="facebook" font-scale="1.5" class="mr-3"/>Inicia sesión con Facebook</b-button>
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
  name: 'LogIn',
  props: {},
  components: {

  }
}
</script>
