<template>
  <b-container>
    <b-row class="pb-6">
      <b-col>
        <h1 class="primary">Crea una nueva habitación</h1>
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
        <b-form @submit.prevent="OnSubmit">
          <b-container class="mt-4">
            <b-row align-h="center" class="my-4">
              <b-col xl="6" class="pr-4">
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Título de la publicación:" label-for="input-1" description="Pon un titulo llamativo para atraer a los usuarios.">
                      <b-form-input id="input-1" v-model="form.title" placeholder="Título" required/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Precio:" label-for="input" description="Precio en pesos colombianos (COP)">
                      <b-form-input @blur="fields.price = false" @focus="fields.price = true" id="input" v-model="price" placeholder="Escribe el costo mensual de tu habitación." required/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Descripción:" label-for="input">
                      <b-textarea id="input" v-model="form.description" placeholder="Describe de manera general la habitación. Puedes incluir información de la ubicación."/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-col>
                    <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
                      <b-form-group label="Servicios de la casa:" description="Elige los servicios que incluye la habitación.">
                        <tag-select :options="fields.services" @value="PutServicesValues"/>
                      </b-form-group>
                    </b-overlay>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-col>
                    <b-overlay :show="fields.loading" variant="white" spinner-variant="primary">
                      <b-form-group label="Nomas de la casa:" description="Elige las reglas que se deben cumplir en tu casa.">
                        <tag-select :options="fields.rules" @value="PutRulesValues"/>
                      </b-form-group>
                    </b-overlay>
                  </b-col>
                </b-row>
              </b-col>
              <b-col xl="6" class="pr-4">
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Dirección:" label-for="input-1" description="Procura dar tu dirección exacta para ser más visible a los usuarios.">
                      <b-form-input id="input-1" v-model="form.address" placeholder="Dirección" required/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center" class="mb-3" >
                  <b-col>
                    <b-form-group label="Ubicación:" label-for="input" description="Indica la ubicación de la habitación en el mapa.">
                      <Map :page="true" @clicked="UpdatePosition"/>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h2 class="primary my-4">Fotos de la habitación</h2>
              </b-col>
            </b-row>
            <b-row class="my-4">
              <b-col md="6">
                <b-row align-h="center">
                  <h3 class="primary mb-3">Foto principal</h3>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-img v-if="fields.mainImageSrc" :src="fields.mainImageSrc" thumbnail center fluid rounded/>
                    <b-img v-if="!fields.mainImageSrc" src="https://uroom20211.blob.core.windows.net/images/default-image.png" thumbnail center fluid rounded/>
                  </b-col>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-form-file v-model="form.main_img" type="file" accept="image/jpeg, image/png" placeholder="Selecciona la imágen." class="mb-2 col-8 text-left" required></b-form-file>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6">
                <b-row align-h="center">
                  <h3 class="primary mb-3">Fotos adicionales</h3>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-carousel fade controls v-if="fields.optionalImagesSrc">
                      <b-carousel-slide v-for="item in fields.optionalImagesSrc" :key="item" :img-src="item"/>
                    </b-carousel>
                    <b-img v-if="!fields.optionalImagesSrc.length" src="https://uroom20211.blob.core.windows.net/images/default-image.png" thumbnail center fluid rounded/>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-file v-model="form.images" type="file" accept="image/jpeg, image/png" placeholder="Selecciona las imágenes." class="mb-2 col-8 text-left" multiple></b-form-file>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center" class="mb-5">
              <b-col align-self="center" class="my-4" md="6" xs="12">
                <b-button variant="primary" block type="submit" @submit.prevent="OnSubmit">Completar registro</b-button>
              </b-col>
            </b-row>
            <b-row align-h="center" class="mb-5" v-if="fields.loading">
              <b-col align-self="center" class="my-4" md="6" xs="12">
                <b-spinner variant="primary"/>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
      </b-col>
  </b-container> 
</template>

<script>
import PostService from "../services/post-services.js"
import TagSelect from "./TagSelect.vue";
import Map from "./Map.vue";
import filetoblob from "../libs/file-to-blob.js"

  export default {
    data(){
      return{
        fields: {
          loading: true,
          price: false,
          mainImageSrc: '',
          optionalImagesSrc: [],
          services: [],
          rules: [],
        },
        form: {
          title: '',
          price: 0,
          description: '',
          address: '',
          latitude: null,
          longitude: null,
          main_img: null,
          images: [],
          services: [],
          rules: []
        },
        alert: {
          show: false,
          message: ''
        }
      }
    },
    async created(){
      this.fields.loading = true;
      var services = await PostService.GetServices();
      var list_services = [];
      services.forEach((element) =>{
        list_services.push(element.name);
      })
      this.fields.services = list_services;
      var rules = await PostService.GetRules();
      var list_rules = [];
      rules.forEach((element) =>{
        list_rules.push(element.name);
      })
      this.fields.rules = list_rules;
      console.log(localStorage.getItem("user_email"));
      this.fields.loading = false;
    },
    methods: {
      UpdatePosition(value) {
        this.form.latitude = value[0];
        this.form.longitude = value[1];
      },
      OnSubmit(){
        var self = this;
        if(this.form.latitude == null || this.form.longitude == null){
          self.alert.message = "Debes indicar en el mapa la ubicación de la casa.";
          self.alert.show = true;
          window.scrollTo(0, 0);
        }else if(this.form.price.isNaN || this.form.price <= 0){
          self.alert.message = "El precio debe ser un valor numérico mayor que cero.";
          self.alert.show = true;
          window.scrollTo(0, 0);
        }else{
          self.fields.loading = true;
          PostService.AddRoom(this.form)
            .then(function(response){
              console.log(response);
              alert("Publicación creada exitosamente");
              self.$router.push("/MyRooms").then(function(){
                self.$router.go();
              });
              self.fields.loading = false;
            }).catch(function(error){
              if(error.response){
                self.alert.message = error.response.data;
                self.alert.show = true;
              }else if(error.request){
                self.alert.message = "No se ha recibido respuesta del servidor. Intentalo de nuevo más tarde";
                self.alert.show = true;
              }else{
                self.alert.message = "Ha ocurrido un error desconocido. Intentalo de nuevo más tarde";
              }
              window.scrollTo(0, 0);
              self.fields.loading = false;
            }
          );
        }
      },
      PutServicesValues(values){
        this.form.services = values;
      },
      PutRulesValues(values){
        this.form.rules = values;
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
      }
    },
    watch: {
      'form.main_img'(newValue, oldValue) {
        if(newValue !== oldValue) {
          if(newValue) {
            filetoblob(newValue)
              .then((value) => {
                this.fields.mainImageSrc = value;
              })
              .catch(() => {
                this.fields.mainImageSrc = null;
              });
          }else{
            this.fields.mainImageSrc = null;
          }
        }
      },
      'form.images'(newValue, oldValue){
        if(newValue !== oldValue) {
          if(newValue){
            this.fields.optionalImagesSrc = [];
            for(var i = 0; i < newValue.length; i++){
              filetoblob(newValue[i])
              .then((value) => {
                this.fields.optionalImagesSrc.push(value);
              })
              .catch(() => {
                this.fields.optionalImagesSrc.push(null);
              });  
            }
          }else{
            this.fields.mainImageSrc = null;
          }
        }
      }
    },
    components: {
      TagSelect,
      Map
    }
  }
</script>