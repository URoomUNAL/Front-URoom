<template>
  <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="row ">
                <!--Primera columna-->
                <div class="col-sm">
                    <h1>FOTO</h1>
                    <b-form-file v-model="file1" ref="file-input" class="mb-2"></b-form-file>


    <p class="mt-2">Selected file: <b>{{ file ? file.name : '' }}</b></p>
                    <b-button type="submit" >Cambiar foto</b-button>
                </div>
                <!--Segunda columna-->
                <div class="col-sm">
                    <b-form-group id="input-group-2" label="Nombres:" label-for="input-2" 
                        description="¿Qué estás esperando?">
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Ingresar nombres"
                        required
                        
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-1"
                        label="Correo:"
                        label-for="input-1"
                        description="No compartiremos tu email con nadie más."
                        >
                        <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="Ingresar correo"
                            required
                        ></b-form-input>
                    </b-form-group>
                </div>
                <!--Tercera columna-->
                <div class="col-sm">
                    <b-form-group id="input-group-3" label="Apellidos:" label-for="input-3" 
                        description="Usa tus datos reales.">
                        <b-form-input
                        id="input-3"
                        v-model="form.apellido"
                        placeholder="Ingresar apellidos"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <label for="edad">Edad:</label>
                    <b-form-spinbutton id="edad" v-model="value" min="18" max="100"></b-form-spinbutton>
                    <p>Tienes que ser mayor de edad. (a revisar)</p>
                </div>
            </div>
            

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
            >
            
            </b-form-checkbox-group>
        </b-form-group>
        <div id='enviar'>
          <b-button type="submit" >Confirmar</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
        </b-form>
        
    </b-container>
            
  
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          apellido:'',
          checked: [],
          file1: null
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.apellido = ''
        this.file1 = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      clearFiles() {
        this.$refs['file-input'].reset()
      }
    }
  }
</script>