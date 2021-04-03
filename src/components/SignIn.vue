<template>
    <div>
        <h1>Regístrate</h1>
        <b-form class="col-4 offset-4">
            <b-form-input
            label="Correo"
            placeholder="Correo"
            required
            
            />
            <b-form-input
            label="Contraseña"
            placeholder="Contraseña"
            required
            class="mt-3"
            />
            <b-form-input
            label="Confirmar contraseña"
            placeholder="Confirmar contraseña"
            required
            class="mt-3"
            />
            <b-button class="mt-3 redbtn col-5 "> <b-icon style="color:#FFFFFF" icon="google" font-scale="1.5"></b-icon> </b-button>
            <b-button class="mt-3 bluebtn col-5 offset-2" ><b-icon style="color:#FFFFFF" icon="facebook" font-scale="1.5"></b-icon></b-button>
              
            <b-form-checkbox class="mt-3" value="Estudiante">Pincha si eres estudiante.</b-form-checkbox>
            <p class="ml-3">Al registrarte estás aceptando los <a style='color:#670071' href='/'>términos y condiciones</a>.</p>
            <router-link :to="{name: 'RegistroData'}">
                <b-button class="col-6 mb-3" type="submit">Regístrate</b-button>
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