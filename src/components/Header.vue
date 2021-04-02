<template>
  <div>
    <b-navbar toggleable="lg">
      <b-container>
          <b-navbar-brand>
              <a href="/"><img src='../assets/uroom-logo.png' alt="Logo URoom"></a>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                  <b-nav-item>Inicio</b-nav-item>
                  <b-nav-item>Habitaciones</b-nav-item>
                  <b-nav-item>Sobre nosotros</b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                  <b-nav-item v-b-modal.log-in-modal><div class="emphasis">Inicia sesión</div></b-nav-item>
                  <b-button v-b-toggle.collapse-1>Registrate</b-button>
              </b-navbar-nav>
          </b-collapse>
      </b-container>
    </b-navbar>
    <b-modal id="log-in-modal" title="BootstrapVue">
      <p>ola</p>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {}
}
</script>