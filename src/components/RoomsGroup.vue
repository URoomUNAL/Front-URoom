<template>
    <b-container class="col-md-8 offset-md-2 col-12">
      <b-row align-h="center" class="my-4">
        <b-col v-for="marker in markers" xl="4" sm="12" md="6" class="pr-4" :key = marker.id>
        <b-card
            :title="marker.description"
            :img-src="marker.main_img"
            img-alt="Card Image"
            img-top
            align="center"
            sty>
            
             <b-card-text>
              {{marker.address}}
            </b-card-text>
            <b-card-text>
              {{marker.description}}
            </b-card-text>
            <b-card-text>
              {{price_string}}
            </b-card-text>

            <b-card-text h3>
              <h5> Servicios: </h5>
              <span v-for="(service, index) in marker.services" :key="index">
                <span>{{service.name}}</span><span v-if="index+1 < marker.services.length">, </span>
              </span>
            </b-card-text>
            <b-card-text>
            <h5> Normas: </h5>
              <span v-for="(rule, index) in marker.rules" :key="index">
                <span>{{rule.name}}</span><span v-if="index+1 < marker.rules.length">, </span>
              </span>
            <!-- <b-tag v-for="rule in markers.rules" :key="rule">
                    {{rule}}
                  </b-tag> -->
            </b-card-text>
          <b-button variant="primary">Ver Publicación</b-button>
        </b-card>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  export default {
    props:['markers'],
    name: 'RoomsGroup',
    components: {
    },
    data() {
      return {
        rows: ''
      }
    },
    created(){
        
    },
    methods: {
      
    },
    watch: { 
      markers: function(newVal) { // watch it
        this.markers = newVal;
        this.toMatrix();
      }
    }
  }
</script>
<style>
.card {
    margin-bottom: 10px;
    border-radius: 20px;

} 
</style>