<template>
  <b-container class="mb-5">
    <b-row>
      <b-col>
        <h1 class="primary mb-5">Ops, parece que estás en el lugar equivocado</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1 class="primary mb-5">Error: 404</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>La página a la que estas intentando acceder no existe.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr/>
      </b-col>
    </b-row>
    <b-row>  
      <b-col>
        <b-button variant="primary" class="mb-2" to="/">Regresar a inicio.</b-button>
        <b-button variant="primary" class="mb-2" @click="$router.go(-1)">Regresar a la página anterior.</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  export default {
    name: 'Error404'
  }
</script>
