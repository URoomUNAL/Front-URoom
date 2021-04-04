<template>
  <div>
    <h1 class="primary">Inicia sesión</h1>
    <b-form class="col-4 offset-4">
    <b-form-input
      label="Correo"
      placeholder="Correo"
      type="email"
      required
    />
    <b-form-input
      label="Contraseña"
      placeholder="Contraseña"
      required
      class="mt-3"
    />
    <b-button variant="google" class="mt-3 col-5 "><b-icon icon="google" font-scale="1.5"></b-icon> </b-button>
    <b-button variant="facebook" class="mt-3 col-5 offset-2" ><b-icon icon="facebook" font-scale="1.5"></b-icon></b-button>
    <b-button variant="primary" class="col-6 mb-3 mt-3" type="submit">Iniciar sesión</b-button>     
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
  props: {},
  components: {

  }
}
</script>