<template>
    <div>
        <b-collapse accordion="my-accordion" role="tabpanel" id="LogIn" class="mt-2">
            <LogIn/>
        </b-collapse>
        <b-collapse accordion="my-accordion" role="tabpanel" id="SignIn" data-parent="#myGroup" class="mt-2">
            <SignIn/>
        </b-collapse>
        <Carousel/>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import LogIn from '../components/LogIn.vue'
import SignIn from '../components/SignIn.vue'

export default {
  name: 'HomeContent',
  props: {},
  components: {
      LogIn,
      Carousel,
      SignIn
    }
}
</script>