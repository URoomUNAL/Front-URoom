<template>
    <footer> 
      <b-row id="top" align-v="center" align-h="center" class="mr-0 ml-0">
        <b-col md="6" col="12">
            <a href="/"><img src='../assets/images/uroom-logo.png' alt="URoom Logo"></a>
            <p class="text-justify col-md-12">URoom es el sitio ideal para encontrar tu habitación ideal en cuestión de segundos.</p>
            <b-row>
              <b-col cols="2" offset="3">
                  <b-icon icon="facebook" font-scale="1.5"/>
              </b-col>
              <b-col cols="2">
                  <b-icon icon="instagram" font-scale="1.5"/>
              </b-col>
              <b-col cols="2">
                  <b-icon icon="twitter" font-scale="1.5"/>
              </b-col>
            </b-row>
        </b-col>
        <b-col md="6" cols="12">
            <p>Encuentra tu vivienda ideal.</p>
            <p>Decenas de opciones que se ajustan a tus necesidades.</p>
            <p>Todo en tan solo unos pocos clics.</p>
        </b-col>
      </b-row>
      <b-row id="bottom">
        <b-col md="6" cols="12">
          <p> &copy; 2021 URoom. Todos los derechos reservados.</p>
        </b-col>
        <b-col md="6" cols="12">
          <a href="">Preguntas frecuentes</a>
          <a href="">Política de privacidad</a>
          <a href="">Términos y condiciones</a>
        </b-col>
      </b-row>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {}
  }
</script>

<style scoped>
  /*@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400&display=swap");*/
  #top {
      background: rgb(179, 178, 178);
      font-family: 'Jost';
      padding: 20px;
  }
  #top p {
      text-align: left;
      padding-left: 150px;
      padding-right: 150px;
      padding-top: 20px;
  }
  #bottom {
      background: rgb(218, 218, 218);
      font-family: 'Jost';
      padding: 20px;
  }
  #bottom a {
      padding: 10px;
      color: var(--secondary);
  }
</style>
