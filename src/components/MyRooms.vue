<template>
  <b-container>
    <b-row class="pb-6">
      <b-col>
        <h1 class="primary">Mis habitaciones</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert v-model="alert.show" variant="danger" dismissible>
            {{alert.message}}
        </b-alert>
      </b-col>
    </b-row>
      <b-col>
        <b-button variant="secondary">Añade una Habitación</b-button>

        <b-list-group>
                <!-- <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
                    <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>

                <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
                    <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                    </b-card-text>
                </b-card> -->
                  <b-list-group-item v-for="room in rooms" :key="room.id">
                    <CardRoom 
                      :room = "room"
                    />
                  </b-list-group-item>
        </b-list-group>
      </b-col>
      <!--{{form}}  -->
  </b-container> 
</template>

<script>
import PostService from "../services/post-services.js"
import LocalService from "../services/local-services.js"
import CardRoom from "./CardRoom.vue"

  const base64Encode = data =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  export default {
    data(){
      return{
        rooms: '',
        alert: {
          show: false,
          message: ''
        }
      }
    },
    async created(){
      await this.getTodos()
      console.log(this.rooms)
    },
    methods: {
      async getTodos() {
        this.rooms = await LocalService.getMaps()
      },
      findLocation(){
        // TODO: Update the center of map.
      },
      OnSubmit(){
          
        PostService.AddRoom(this.form)
          .then(function(response){
            console.log(response);
          }).catch(function(error){
            console.log(error);
          }
        );
      }
    },
    computed: {
      price: {
        get: function(){
          if(this.fields.price){
            if(this.form.price > 0){
              return this.form.price.toString();
            }else{
              return '';
            }
          }else{
            if(this.form.price > 0){
              return "$ " + this.form.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
            }else{
              return '';
            }
          }
        },
        set: function(modifiedValue){
          let newValue = parseFloat(modifiedValue.replace(/[^\d]/g, ""))
          if(isNaN(newValue)) {
            newValue = 0;
          }
          this.form.price = newValue;
        }
      },
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1);
      }
    },
    watch: {
      'form.main_img'(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue) {
            base64Encode(newValue)
              .then((value) => {
                this.fields.mainImageSrc = value;
              })
              .catch(() => {
                this.fields.mainImageSrc = null;
              });
          } else {
            this.fields.mainImageSrc = null;
          }
        }
      },
      'form.optionalImg'(newValue, oldValue){
        if (newValue !== oldValue) {
          if(newValue){
            this.fields.optionalImagesSrc = [];
            for(var i = 0; i < newValue.length; i++){
              base64Encode(newValue[i])
              .then((value) => {
                this.fields.optionalImagesSrc.push(value);
              })
              .catch(() => {
                this.fields.optionalImagesSrc.push(null);
              });  
            }
          }else {
            this.fields.mainImageSrc = null;
          }
        }
      }
    },
    components: {
      CardRoom
    }
  }
</script>

<style scoped>
  
</style>