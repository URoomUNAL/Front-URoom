<template>
    <div>
        <h1>Inicia sesión</h1>
        <b-form>
            <b-form-input
            label="Correo"
            placeholder="Correo"
            required
            class="m-3"
            />
            <b-form-input
            label="Contraseña"
            placeholder="Contraseña"
            required
            class="m-3"
            />
            <b-button type="submit">Inicia sesión</b-button>
        </b-form>
        <HomeContent/>
    </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue'
export default {
  name: 'LogIn',
  props: {},
  components: {
    HomeContent
  }
}
</script>