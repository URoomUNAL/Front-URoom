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
          <ul>
            <li><p>Encuentra tu vivienda ideal.</p></li>
            <li><p>Decenas de opciones que se ajustan a tus necesidades.</p></li>
            <li><p>Todo en tan solo unos pocos clics.</p></li>
          </ul>
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
  #top {
      background: rgb(179, 178, 178);
      padding: 1rem;
  }
  #top p {
      text-align: left;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
  }
  #bottom {
      background: rgb(218, 218, 218);
      padding: 1rem;
  }
  #bottom a {
      padding: 1rem;
      color: var(--secondary);
  }
</style>
