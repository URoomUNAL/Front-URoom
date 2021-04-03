<template>
    <div>
        <h1>Registrate</h1>
        <b-form>
            <b-form-input
            label="Correo"
            placeholder="Correo"
            required
            class="m-3"
            />
            <b-form-input
            label="Contraseña"
            placeholder="Contraseña"
            required
            class="m-3"
            />
            <b-button type="submit">Inicia sesión</b-button>
        </b-form>
        
    </div>
</template>

<script>

export default {
  name: 'LogIn',
  props: {}
}
</script>