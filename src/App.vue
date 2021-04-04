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
@font-face {
  font-family: "hey-august";
  src: url(./assets/fonts/hey-august.ttf) format("truetype");
}
@font-face {
  font-family: "jost";
  src: url(./assets/fonts/jost.ttf) format("truetype");
}
#app {
  font-family: "jost";
  /*font-family: 'Jost', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
