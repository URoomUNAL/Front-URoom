<template>
    <b-overlay :show="!room" variant="white" spinner-variant="primary">
    <b-container v-if="room">
        <b-row>
            <b-col  sm="12" md="2" xl="2" >
                <b-row>
                    <b-button to="/Rooms" variant="primary" class="mt-3" type="submit" block>Volver</b-button>
                </b-row>
            </b-col>
            <b-col  sm="12" md="8" xl="8" >
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
                    <b-row>
                        <b-col>
                            <h2>Descripción</h2>
                            <p>{{room.description}}</p>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col>
                            <b-button variant="primary" class="mt-3" type="submit" block>Contactarse <b-icon variant="white" icon="telephone" font-scale="1.5"  /></b-button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <Questions :questions="this.room.questions"/>
                    </b-row>
                </b-col>
                <b-col sm="12" md="12" xl="4">
                    <b-row class="mb-3">
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
    </b-container>
    </b-overlay>
</template>
<script>
import Map from "../components/Map.vue";
import Questions from "../components/Questions.vue";
import PostService from '../services/post-services.js'
export default {
  props: ['id'],
  name: 'Post',
  components: {
      Map,
      Questions
  },
  data(){
      return{
          room: ''
      }
  },
  async created(){
    this.room = await PostService.getPost(this.id);
  },
  methods: {
      getFormatPrice(price){
        return "$ " + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
      }
  }
  
}
</script>
<style>
.carousel .item {
  height: 200px;
}
</style>