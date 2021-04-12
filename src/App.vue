<template>
  <div id="app">
    <!--Importación del header-->
    <Header :data="data"/>
    <!--Importación del contenido-->
    <router-view/>
    <!--Importación del footer-->
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import axios from 'axios'

  export default {
    name: 'App',
    data(){
      return{
        data: false
      }
    },
    components: {
      Header,
      Footer
    },
    methods: {
      created(){
        const response = axios.get('data');
        this.data = response;
      }
    }
  }
</script>

<style>
#app {
  font-family: "jost";
  /*font-family: 'Jost', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
