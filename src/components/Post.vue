<template>
    
        <b-card
            :title="marker.description"
            :img-src="marker.main_img"
            img-alt="Image"
            img-top>
            
            <b-card-text>
                {{marker.address}}
            </b-card-text>
        </b-card>
        
    </b-container>
</template>

<script>
  export default {
    props:['marker'],
    name: 'Post',
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
      
    }
  }
</script>
<style>
.card-deck .card {
    max-width: calc(33.33333% - 30px);
    margin-bottom: 10px;
    border-radius: 20px;

} 
</style>