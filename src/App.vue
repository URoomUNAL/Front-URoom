<template>
  <div id="app">
    <!--Importación del header-->
    <Header/>
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Carousel
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap");
#app {
  font-family: Jost;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
