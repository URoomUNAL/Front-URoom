<template>
    <b-container class="col-8 offset-2">
        
        <b-card-group deck  v-for="(row,index) in rows" :key="index">
        <b-card
            v-for="marker in row"
            :key = marker.id
            :title="marker.description"
            :img-src="marker.main_img"
            img-alt="Image"
            img-top>
            
            <b-card-text>
                {{marker.address}}
            </b-card-text>
            <b-btn variant="primary" block>Ver publicación</b-btn>
            </b-card>
            </b-card-group>
        
    </b-container>
</template>

<script>
  export default {
    props:['markers'],
    name: 'RoomsGroup',
    components: {
    },
    data() {
      return {
        rows: ''
      }
    },
    created(){
        this.toMatrix()
    },
    methods: {
      toMatrix(){
        this.rows = this.markers
        this.rows = this.rows.reduce((c, n, i) => {
              if (i % 3 === 0) c.push([]);
              c[c.length - 1].push(n);
              return c;
          }, []);
        
      }
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