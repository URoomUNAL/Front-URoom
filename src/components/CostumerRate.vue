<template>
  <b-container v-if="student">
    <h3>{{student.name}}</h3>

    <b-form-rating @change="value()" variant="warning" required v-model="student.score"></b-form-rating>
    <h6 v-if="show">Seleccione una estrella calificando al estudiante.</h6>
    <!-- <b-row class="mt-3">
      <b-col sm="12" md="12" class="text-center">
          <b-form-textarea
          id="textarea"
          v-model="student.comment"
          placeholder="Añade un comentario calificando al estudiante."
          rows="3"
          max-rows="6"
          required
          style="overflow-y:hidden"
          >
          </b-form-textarea>
          
      </b-col>
    </b-row>             -->
    <b-row class="mt-3">
      <b-col sm="12" md="12">
        <b-button block variant="primary" @click="calification()">Calificar</b-button>      
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PostService from '../services/post-services.js'
  export default {
    props:['student'],
    data(){
      return {
        post: '',
        show: true
      }
    },
    name: 'CostumerRate',
    methods: {
      calification(){
        if(!this.student.score){
            console.log("hola")
        }else{
          PostService.RateStudent(this.student.actual_rent_id, this.student.score)
          this.$emit('listo', true)
        }
      },
      
      value(){
        this.show = false
      }
    },
    watch: { 
      student: function(newVal) { 
        this.student = newVal;
      }
    }
  }
</script>

<style>

.card {
    margin-bottom: 10px;
    border-radius: 20px;
} 
h2, h4 {
  color: var(--primary);
}
h6 {
  color: var(--google);
  font-family: 'jost';
}

.modal-dialog > .modal-content{
  background-color: #ffffff !important;
  border-radius: 20px;
}

</style>