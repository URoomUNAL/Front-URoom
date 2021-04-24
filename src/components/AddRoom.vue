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
                    <b-form-group label="Servicios de la casa:" description="Elige los servicios que incluye la habitación.">
                      <tag-select :options="fields.services" @value="PutServicesValues"/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="center">
                  <b-col>
                    <b-form-group label="Nomas de la casa:" description="Elige las reglas que se deben cumplir en tu casa.">
                      <tag-select :options="fields.rules" @value="PutRulesValues"/>
                    </b-form-group>
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
                    <b-form-file v-model="form.main_img" type="file" accept="image/jpeg, image/png" placeholder="Selecciona la imágen." class="mb-2 col-8 text-left"></b-form-file>
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
                    <b-form-file v-model="form.optionalImg" type="file" accept="image/jpeg, image/png" placeholder="Selecciona las imágenes." class="mb-2 col-8 text-left" multiple></b-form-file>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center" class="mb-5">
              <b-col align-self="center" class="my-4" md="6" xs="12">
                <b-button variant="primary" block type="submit" >Completar registro</b-button>
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
        fields: {
          price: false,
          mainImageSrc: '',
          optionalImagesSrc: [],
          services: ['service0', 'service1', 'service2'],
          rules: ['rule0', 'rule1', 'rule2']
        },
        form: {
          title: '',
          price: 0,
          description: '',
          address: '',
          latitude: 0.0,
          longitude: 0.0,
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
    methods: {
      UpdatePosition(value) {
        this.form.latitude = value[0];
        this.form.longitude = value[1];
      },
      OnSubmit(){
        PostService.AddRoom(this.form)
          .then(function(response){
            console.log(response);
          }).catch(function(error){
            console.log(error);
          }
        );
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
      },
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1);
      }
    },
    watch: {
      'form.main_img'(newValue, oldValue) {
        if(newValue !== oldValue) {
          if(newValue) {
            base64Encode(newValue)
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
      'form.optionalImg'(newValue, oldValue){
        if(newValue !== oldValue) {
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