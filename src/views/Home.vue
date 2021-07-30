<template>
  <div>
    <Carousel/>
    <b-container>
      <FAQ class="mb-4"/>
    </b-container>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import FAQ from '../components/FAQ.vue'

export default {
  name: 'Home',
  components: {
      Carousel,
      FAQ
    }
}
</script>