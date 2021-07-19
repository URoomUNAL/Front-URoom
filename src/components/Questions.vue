<template>
    <b-col>
      <b-row v-for="question in questions" :key="question.id" xl="12" md="12" sm="12" >
        <b-card :title="question.anonymous ? 'Anónimo' : question.user_name" img-alt="Card Image" img-top class="text-left" title-text-variant="primary" style="min-width: 100%;">
          <b-card-text>
            <b-row>
              <b-col cols=10>
                <strong>{{question.question}}</strong>
              </b-col>
              <b-col cols=2 class="text-right">
                <b-icon-pencil-fill variant="primary" v-b-tooltip.hover title="Editar pregunta" font-scale="1.5"/>
              </b-col>
            </b-row>
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
    name: 'Questions'
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