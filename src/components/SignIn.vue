<template>
    <div>
        <h1>Registrate</h1>
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
            <router-link :to="{name: 'RegistroData'}">
                <b-button type="submit">Regístrate</b-button>
            </router-link>
        </b-form>
        <HomeContent/>
    </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue'
export default {
  name: 'SignIn',
  props: {},
  components: {
    HomeContent
  }
}
</script>