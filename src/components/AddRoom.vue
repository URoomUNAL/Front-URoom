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
            <b-row align-h="center">
              <b-col md="6" class="pr-4">
                <b-row align-h="center" class="mb-4">
                  <h2 class="primary mb-3">Datos principales</h2>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Dirección:" label-for="input-1" description="Procura dar tu dirección exacta para facilitar la experiencia de tus clientes.">
                      <b-form-input id="input-1" v-model="form.address" @change="findLocation" placeholder="Dirección del predio" required/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center" style="height: 500px">
                  <b-col>
                    <b-form-group label="Mapa:" label-for="input">
                      <!--<l-map style="height: 80%" class="rounded">
                      </l-map>-->
                      <Map/>
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
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Precio:" label-for="input" description="Debes dar el precio en pesos colombianos">
                      <b-form-input @blur="fields.price = false" @focus="fields.price = true" id="input" v-model="price" placeholder="Escribe el costo mensual de tu habitación." required/>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
              <b-col xl="6" class="pr-4">
                <b-row align-h="center" align-v="center" class="mb-4">
                  <h2 class="primary mb-3">Servicios de la casa.</h2>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <tag-select :options="options"/>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="center" class="mb-4">
                  <h2 class="primary mb-3">Normas de la casa.</h2>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <tag-select :options="options"/>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h2 class="primary mb-3">Fotos de la habitación</h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-row align-h="center">
                  <h3 class="primary mb-3">Foto principal</h3>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-img v-if="form.main_img" :src="fields.mainImageSrc" thumbnail center fluid rounded/>
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
                    <b-carousel fade controls>
                      <b-carousel-slide v-for="item in fields.optionalImagesSrc" :key="item" :img-src="item"/>
                    </b-carousel>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-file v-model="form.optionalImg" type="file" accept="image/jpeg, image/png" placeholder="Selecciona las imágenes." class="mb-2 col-8 text-left" multiple></b-form-file>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col align-self="center" class="my-4" xl="8" lg="6">
                <b-button variant="primary" block type="submit" >Completar registro</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
      </b-col>
      {{form}}
  </b-container> 
</template>

<script>
import AuthService from '../services/principal-services';
import TagSelect from "./TagSelect.vue";
import Map from "./Map.vue";
//import { LMap} from "vue2-leaflet";

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
        options: ['Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
        fields: {
          price: false,
          mainImageSrc: '',
          optionalImagesSrc: null
        },
        form: {
          address: '',
          latitude: 0.0,
          longitude: 0.0,
          description: '',
          price: 0,
          main_img: null,
          optionalImg: null,
          allowTags: []
        },
        alert: {
          show: false,
          message: ''
        }
      }
    },
    methods: {
      findLocation(){
        // TODO: Update the center of map.
      },
      OnSubmit(){
        AuthService.AddRoom(JSON.stringify(this.form))
        .then(function(response){
          console.log(response);
        }).catch(function(error){
          console.log(error);
        });
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
                alert(value);
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
      TagSelect,
      //LMap,
      Map
    }
  }
</script>