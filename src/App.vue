<template>
  <div id="app">
    <!--Importación del header-->
    <Header/>
    <!--Importación del contenido-->
    <router-view/>
    <!--Importación del footer-->
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
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
