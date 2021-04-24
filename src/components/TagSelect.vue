<template>
  <div>
    <b-form-group>
      <b-form-tags v-model="values" size="lg" add-on-change no-outer-focus>
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag @remove="removeTag(tag)" :title="tag" :disabled="disabled" variant="primary">{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select v-bind="inputAttrs" v-on="inputHandlers" :disabled="disabled || availableOptions.length === 0" :options="availableOptions">
            <template #first>
              <option disabled value="">Elige una etiqueta.</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    props: {
      options : Array
    },
    data(){
      return{
        value: []
      }
    },
    computed: {
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      },
      values:{
        get: function(){
          return this.value;
        },
        set: function(value){
          this.value = value;
          this.$emit("value", this.value);
        }
      }
    }
  }
</script>