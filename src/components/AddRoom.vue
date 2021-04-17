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
        <b-form>
          <b-container class="mt-4">
            <b-row align-h="center">
              <b-col xl="4" md="8">
                <b-row align-h="center" class="mb-4">
                  <h2 class="primary mb-3">Datos principales</h2>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Dirección:" label-for="input-1">
                      <b-form-input id="input-1" v-model="form.address" @change="findLocation" placeholder="Dirección del predio" required/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Latitud:" label-for="input">
                      <b-form-input id="input" v-model="form.lat" required/>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Longitud:" label-for="input">
                      <b-form-input id="input" v-model="form.lng" required/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group label="Descripción:" label-for="input">
                      <b-textarea id="input" v-model="form.description" placeholder="Describe de manera general la habitación."/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group  label="Mapa:" label-for="input">
                      <b-card label="Mapa:" label-for="input"/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-group  label="Precio:" label-for="input">
                      <b-form-input @click="onFocus" @ended="OnChangePrice" id="input" v-model="display.price" required/>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
              <b-col xl="4" md="8">
                <b-row align-h="center" class="mb-4">
                  <h2 class="primary mb-3">Fotos de la habitación</h2>
                </b-row>
                <b-row align-h="center">
                  <h3 class="primary mb-3">Foto principal</h3>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-img thumbnail center rounded src="https://picsum.photos/250/250/?image=54" />
                  </b-col>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-form-file type="file" accept=".jpg, .png" placeholder="" class="mb-2 col-10"></b-form-file>
                  </b-col>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <h3 class="primary my-3">Fotos adicionales</h3>
                </b-row>
                <b-row align-h="center" class="mb-4">
                  <b-col>
                    <b-img thumbnail center rounded src="https://picsum.photos/250/250/?image=54" />
                  </b-col>
                </b-row>
                <b-row align-h="center">
                  <b-col>
                    <b-form-file type="file" accept=".jpg, .png" multiple class="mb-2 col-10"></b-form-file>
                  </b-col>
                </b-row>
              </b-col>
              <b-col xl="4" md="8">
                <b-row align-h="center" align-v="center" class="mb-4">
                  <h2 class="primary mb-3">Restricciones de tu predio</h2>
                </b-row>
                <b-row align-h="center">
                  <b-col sm="12" md="6">
                    <b-form-checkbox class="mb-2"> Se permite tener mascotas. </b-form-checkbox>
                    <b-form-checkbox class="my-2"> Se permite tener mascotas. </b-form-checkbox>
                    <b-form-checkbox class="my-2"> Se permite tener mascotas. </b-form-checkbox>
                    <b-form-checkbox class="my-2"> Se permite tener mascotas. </b-form-checkbox>
                  </b-col>
                  <b-col sm="12" md="6">
                    <b-form-checkbox class="mb-2"> Se permite tener mascotas. </b-form-checkbox>
                    <b-form-checkbox class="my-2"> Se permite tener mascotas. </b-form-checkbox>
                    <b-form-checkbox class="my-2"> Se permite tener mascotas. </b-form-checkbox>
                    <b-form-checkbox class="my-2"> Se permite tener mascotas. </b-form-checkbox>
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
  </b-container>    
</template>

<script>
  export default {
    data(){
      return{
        display: {
          price: ''
        },
        form: {
          address: '',
          lat: 0.0,
          lng: 0.0,
          description: '',
          price: 0
        },
        alert: {
          show: false,
          message: ''
        }
      }
    },
    methods:{
      formatPrice() {
        let val = (this.form.price/1).toFixed(2).replace('.', ',')
        this.form.price = '$ ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      findLocation(){
        // TODO: Update the center of map.
      },
      onFocus(){
        alert("ola");
      }

    }
  }
</script>