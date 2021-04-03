<template>
    <div>
        <h1>Inicia sesión</h1>
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
            
            <b-button class="mt-3 redbtn col-5 "> <b-icon style="color:#FFFFFF" icon="google" font-scale="1.5"></b-icon> </b-button>
            <b-button class="mt-3 bluebtn col-5 offset-2" ><b-icon style="color:#FFFFFF" icon="facebook" font-scale="1.5"></b-icon></b-button>
              
            <b-button class="col-6 mb-3 mt-3" type="submit">Iniciar sesión</b-button>
            
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