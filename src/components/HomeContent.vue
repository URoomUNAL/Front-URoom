<template>
    <div>
        <b-collapse id="collapse-1" class="mt-2">
            <LogIn/>
        </b-collapse>
        <Carousel/>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import LogIn from '../components/LogIn.vue'

export default {
  name: 'HomeContent',
  props: {},
  components: {
      LogIn,
      Carousel
    }
}
</script>