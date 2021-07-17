<template>
  <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
    <b-container>
      <h3 class="primary text-left mt-4"> Elige a quien estás arrendando la habitación </h3>
      <b-form @submit.prevent="OnSubmit">
        <b-row class="mt-4">
            <b-form-select v-model="form.selected" :options="fields.options"/>
        </b-row>
        <b-row class="mt-4">
            <b-form-checkbox v-model="form.anonymous"/>
            <p> La persona a la cual estás arrendando no aparece en la lista </p>
        </b-row>
        <b-row align-h="center" align-v="center">
            <b-button type="submit" variant="primary" class="mt-3 text-center">Arrendar a persona</b-button>
        </b-row>
      </b-form>
      {{id-post}}
    </b-container>
  </b-overlay>
</template>

<script>
//import PostServices from '../services/post-services.js'

export default {
  name: "RentPanel",
  props:
      ['id-post']
  ,
  data(){
    return{
      fields:{
        loading: false,
        options: ["Leonardo", "Santiago", "Sebastian", "Diego", "Ricardo"],
        selected: null
      },
      form: {
        anonymous: false,
        post_id: 0
      }
    }    
  },
  methods: {
    OnSubmit(){
      console.log("!");
    }
  }
}
</script>