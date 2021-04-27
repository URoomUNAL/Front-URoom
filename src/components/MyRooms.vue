<template>
  <b-div>
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
    
    <b-button variant="primary" class = "col-8 my-2" href="/AddRoom">Añade una Habitación</b-button>
    <CardRoom :markers = "rooms" num_per_row="1"/>
  </b-div> 
</template>

<script>
// import PostService from "../services/post-services.js"
import LocalService from "../services/local-services.js"
import CardRoom from "./CardRoom.vue"
// import RoomsGroup from "./RoomsGroup.vue"

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
        this.rooms = await LocalService.getMyRooms()
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