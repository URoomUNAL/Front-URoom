<template>
    <div>
        <h1 class="primary">Regístrate</h1>
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
              class="mt-3"
              required
            />
            <b-form-input
              label="Confirmar contraseña"
              placeholder="Confirmar contraseña"
              class="mt-3"
              required
            />
            <b-button variant="google" class="mt-3 col-5 "> <b-icon icon="google" font-scale="1.5"></b-icon> </b-button>
            <b-button variant="facebook" class="mt-3 col-5 offset-2"><b-icon icon="facebook" font-scale="1.5"></b-icon></b-button>
            <b-form-radio-group required class="mt-3">
              <b-form-radio>Estudiante</b-form-radio>
              <b-form-radio>Arrendatario</b-form-radio>
            </b-form-radio-group>
            <p class="mt-3">Al presionar el siguiente botón estás aceptando los <a class="primary" href='/'>términos y condiciones</a>.</p>
            <b-button to='/RegistroData' variant="primary" class="col-6 mb-3" type="submit">Regístrate</b-button>            
        </b-form>
    </div> 
</template>

<script>
export default {
  name: 'SignUp',
  props: {},
  components: {

  }
}
</script>