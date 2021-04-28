<template>
  <b-container>
    <b-navbar toggleable="lg" class="mt-4">
      <b-container>
        <b-container class="flex-nowrap">
          <b-navbar-brand>
            <a href="/"><b-img src='../assets/images/uroom-logo.png' fluid alt="URoom Logo"/></a>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-container>
        <b-collapse id="nav-collapse" is-nav class="ml-auto">
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="Rooms">Habitaciones</b-nav-item>
            <b-nav-item to="/">Sobre nosotros</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" v-if="!logged">
            <b-nav-item v-b-toggle.log-in><div class="primary">Inicia sesión</div></b-nav-item>
            <b-button variant="primary" v-b-toggle.sign-up>Regístrate</b-button>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" v-if="logged">
            <b-button variant="primary" @click="LogOut">Cerrar sesión</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <LogIn/>
    <SignUp/>
  </b-container>
</template>

<script>
  import LogIn from './LogIn';
  import SignUp from './SignUp';

  export default {
    data(){
      return{
        logged: null
      }
    },
    created(){
      this.logged = localStorage.getItem("user_email");
    },
    mounted(){
      this.logged = localStorage.getItem("user_email");
    },
    methods: {
      LogOut(){
        localStorage.removeItem("user_email");
        if(this.$route.path == '/'){
          this.$router.go();
        }else{
          this.$router.go('/');
          this.$router.push('/');
        }
      }
    },
    components: {
      LogIn,
      SignUp
    }
  }
</script>

<style scoped>
  .navbar{
    margin: 2em;
    white-space: pre;
  }
  .navbar .navbar-nav .nav-link {
    letter-spacing: 0.5px;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
</style>