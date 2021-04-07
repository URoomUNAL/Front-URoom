<template>
    <footer style="position: sticky;"> 
      <b-row id="top" align-v="center" align-h="center" class="mr-0 ml-0">
          <b-col md="6" cols="12">
              <a href="/"><img src='../assets/images/uroom-logo.png' alt="URoom Logo"></a>
              <p>URoom es el sitio ideal para encontrar tu habitación ideal en cuestión de segundos.</p>
              <b-row align-v="center" align-h="center">
                <b-col cols="2">
                    <a href="/"><b-icon variant="secondary" icon="facebook" font-scale="1.5"/></a>
                </b-col>
                <b-col cols="2">
                    <a href="/"><b-icon variant="secondary" icon="instagram" font-scale="1.5"/></a>
                </b-col>
                <b-col cols="2">
                    <a href="/"><b-icon variant="secondary" icon="twitter" font-scale="1.5"/></a>
                </b-col>
              </b-row>
          </b-col>
      </b-row>
      <div id="bottom">
        <b-row>
          <b-col class="mt-2 mb-2"><a>&copy; 2021 URoom. Todos los derechos reservados.</a></b-col>
          <b-col class="mt-2 mb-2">
            <b-row align-h="center" align-v="center">
              <b-col><a href="/">Preguntas frecuentes</a></b-col>
              <b-col><a href="/">Política de privacidad</a></b-col>
              <b-col><a href="/">Términos y condiciones</a></b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
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
      text-align: center;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
  #bottom {
      background: rgb(218, 218, 218);
      padding: 1rem;
  }
  #bottom a{
      white-space: pre;
      color: var(--secondary);
  }

</style>
