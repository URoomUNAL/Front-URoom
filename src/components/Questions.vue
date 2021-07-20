<template>
    <b-col>
      <b-row v-for="(question, index) in questions" :key="question.id" xl="12" md="12" sm="12" >
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
              <strong>{{'Respuesta: '}}</strong> 
              <div v-if="question.answer" class="mt-2">
                <p>{{question.answer}}</p>
              </div>
              
              <div v-if="!question.answer && creator" class="mt-2">
                <b-form @submit.prevent="answer(index)">
                <b-row>
                  <b-col sm="12" md="9">
                    <b-form-textarea
                    id="textarea"
                    v-model="answers[index]"
                    placeholder="Añade una respuesta."
                    rows="3"
                    max-rows="6"
                    required
                    style="overflow-y:hidden"
                    >
                    </b-form-textarea>
                  </b-col>
                  <b-col sm="12" md="3">
                    <b-button  variant="primary" type="submit" class="mt-2" block>Responder</b-button>
                  </b-col>
                  </b-row>
                </b-form>
              </div>
              <div v-if="!question.answer && !creator" class="mt-2">
                <p>No hay respuesta del dueño de la publicación.</p>
              </div>
          </template>
        </b-card>
      </b-row> 
    </b-col>
</template>

<script>
import PostServices from '../services/post-services.js'
  export default {
    props:['questions','creator'],
    data(){
      return {
        post: '',
        answers: []
      }
    },
    name: 'Questions',
    methods: {
      answer(index){
        this.questions[index].answer = this.answers[index];
        var form = {
          questionId: this.questions[index].id,
          answer: this.questions[index].answer
        }
        PostServices.AnswerQuestion(form)
      }
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