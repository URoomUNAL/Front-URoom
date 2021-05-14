<template>
    <b-col>
      
      <b-row v-for="question in questions" :key="question.id" xl="12" md="12" sm="12" >
        <b-card v-if="anonymous" :title="'Anónimo'"  img-alt="Card Image" img-top class="text-left" title-text-variant="primary" style="min-width: 100%;">
        </b-card>
        <b-card v-if="!anonymous" :title="question.user_name"  img-alt="Card Image" img-top class="text-left" title-text-variant="primary" style="min-width: 100%;">
          <b-card-text>
            <strong>{{question.question}}</strong>
          </b-card-text>
          <template #footer>
              <strong>{{'Respuestas del arrendatario: '}}</strong> 
              {{question.answer}}
          </template>
        </b-card>
      </b-row> 
    </b-col>
</template>

<script>


  export default {
    props:['questions'],
    data(){
      return {
        post: ''
      }
    },
    name: 'Questions',
    methods: {
      
    },
    watch: { 
      
    }
  }
</script>

<style>
.card {
    margin-bottom: 10px;
    border-radius: 20px;
} 
h4 {
  color: var(--primary);
}
</style>