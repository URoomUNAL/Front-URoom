<template>
    <b-card :title = "room.title" title-variant="title-card" :img-src="room.main_img" img-width=500px img-left  style="max-height: 21rem;">
      <b-card-text>
        {{room.address}}
      </b-card-text>
      <b-card-text>
        {{room.description}}
      </b-card-text>
      <b-card-text>
        {{price_string}}
      </b-card-text>

      <b-card-text h3>
        <h5> Servicios: </h5>
      </b-card-text>
      <b-card-text>
       <h5> Normas: </h5>
       {{room.rules}}
       <!-- <b-tag v-for="rule in room.rules" :key="rule">
         {{rule}}
       </b-tag> -->
      </b-card-text>
      <div>
        <b-form-rating v-model="room.score" readonly show-value precision="2"></b-form-rating>
      </div>
    </b-card>
</template>
<script>
  export default {
    name: 'CardRoom',
    props: [
      'room'
    ],
    data(){
      return{
        price_string: "$" + String(this.room.price),
        servs: '' 
      }
    },
    methods: {
      calculateServs() {
        this.servs = this.services.concat('wuenapipol')
      }
    }
  }
</script>

<style>
.card-columns .card{
    /* max-height: calc(33.33333% - 30px); */
    margin-bottom: 10px;
    border-radius: 20px;
} 
#title-card{
    /* max-height: calc(33.33333% - 30px); */
    font-size: 5em;
} 
.card-columns .card .img{
    max-height: calc(33.33333% - 30px);
    margin-bottom: 10px;
    border-radius: 20px;

} 
</style>