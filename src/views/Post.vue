<template>
    <b-overlay :show="!room" variant="white" spinner-variant="primary">
        <b-container v-if="room">
            <b-row>
                <!--<b-col  sm="12" md="2" xl="2" >
                    <b-row>
                        <b-button to="/Rooms" variant="primary" class="mt-3" type="submit" block>Volver</b-button>
                    </b-row>
                </b-col>-->
                <b-col  sm="12" md="12" xl="12" >
                    <b-row align-h="center">
                        <h1 class="primary mb-5">{{room.title}}</h1>
                    </b-row>
                </b-col>
            </b-row>
            <b-col>
                <b-row align-h="center" >
                    <b-col sm="12" md="12" xl="8">
                        <b-carousel fade controls v-if="id">
                            <b-carousel-slide :img-src="room.main_img"/>
                            <b-carousel-slide v-for="item in room.images" :key="item" :img-src="item.url"/>
                        </b-carousel>
                        <b-row class="mt-4">
                            <b-col>
                                <h2>Descripción</h2>
                                <p>{{room.description}}</p>
                            </b-col>
                        </b-row>
                        <b-row class="mb-3">
                            <b-col>
                                <b-button variant="primary" class="mt-3" @click.prevent="Contact" type="submit" block>Contactarse <b-icon variant="white" icon="telephone" font-scale="1.5"/></b-button>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-toast id="status" :variant="toast.variant" title="URoom" auto-hide-delay="3000" no-hover-pause static no-close-button>
                                    {{toast.message}}
                                </b-toast>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col>
                                <h2 class="primary my-5">Preguntas y respuestas</h2>
                                <Questions :questions="this.room.questions" v-if="this.room.questions.length > 0"/>
                                <p v-if="this.room.questions.length <= 1"> No hay aún preguntas para esta publicación, ¡Se el primero en preguntar!</p>
                                <b-button variant="primary" class="mt-3" v-b-modal.new-question>Añadir nueva pregunta</b-button>
                                <b-collapse accordion="new-question-accordeon" v-model="fields.new_question" id="new-question">
                                    <CreateQuestion/>
                                </b-collapse>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="12" md="12" xl="4">
                        <b-row class="my-3">
                            <b-col>
                                <h2>Dirección</h2>
                                <p>{{room.address}}</p>
                                <Map :roomLocation="[room.latitude,room.longitude]"/>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h2>Precio</h2>
                                <p><strong>{{getFormatPrice(room.price)}}</strong></p>
                            </b-col>
                        </b-row>
                        <b-row >
                            <b-col>
                                <h2>Normas</h2>
                                <b-container v-if="room.rules.length">
                                    <b-tag v-for="rule in room.rules" :key="rule.id" no-remove pill variant="primary" class="ml-1">{{rule.name}}</b-tag>
                                </b-container>
                                <b-container v-if="!room.rules.length">
                                    <p>Esta publicación no tiene normas.</p>
                                </b-container>
                            </b-col>
                        </b-row>
                        <b-row >
                            <b-col class="mt-3">
                                <h2>Servicios</h2>
                                <b-container v-if="room.services.length">
                                <b-tag v-for="service in room.services" :key="service.id" no-remove pill variant="primary" class="ml-1">{{service.name}}</b-tag>
                                </b-container>
                                <b-container v-if="!room.services.length">
                                <p>Esta publicación no tiene servicios.</p>
                                </b-container>
                            </b-col>
                        </b-row>
                        <b-row class="mt-3">
                            <b-col>
                                <b-form-rating class="align-items-center" v-if="room.score" v-model="room.score" readonly show-value inline no-border/>
                                <p v-if="!room.score">Esta publicación aún no tiene calificaciones</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-modal id="authentication" hide-footer hide-header>
                <b-container>
                    <AuthenticationPanel/>
                </b-container>
            </b-modal>
        </b-container>
        <b-modal title="Haz una pregunta" id="new-question" title-class="primary" hide-footer>
            <CreateQuestion/>
        </b-modal>
    </b-overlay>
</template>
<script>
import Map from "../components/Map.vue";
import AuthenticationPanel from "../components/AuthenticationPanel.vue";
import CreateQuestion from "../components/CreateQuestion.vue";
import Questions from "../components/Questions.vue";
import PostServices from '../services/post-services.js'
export default {
  props: ['id'],
  name: 'Post',
  components: {
      Map,
      Questions,
      AuthenticationPanel,
      CreateQuestion
  },
  data(){
      return{
          fields:{
              new_question: false
          },
          room: '',
          toast:{
            message: '',
            variant: ''
          }

      }
  },
  async created(){ 
    this.room = await PostServices.getPost(this.$route.params.id);
  },
  methods: {
    getFormatPrice(price){
      return "$ " + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    },
    Contact(){
        let self = this;
        PostServices.GetContact(this.id)        
            .then(function(response){                
                self.toast.message = 'El número con el cual te puedes contactar con el arrendatario de esta publicación es: ' + response.data;
                self.toast.variant = 'success';
                self.$bvToast.show('status');
            }).catch(function(error){
                if(error.response){
                    self.toast.message = 'Debes iniciar sesión antes de solicitar el contacto de un arrendador.';    
                }else{
                    self.toast.message = 'No se ha obtenido respuesta del servidor.';
                }
                self.toast.variant = 'danger';
                self.$bvToast.show('status');
                self.$bvModal.show('authentication');
            }
        );

    }
  }
  
}
</script>
<style>
.carousel .item {
  height: 200px;
}
.toast, .b-toast{
    max-width: 100% !important;

}
</style>