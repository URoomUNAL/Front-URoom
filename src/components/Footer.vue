<template>
 <div>
   <div id="container">
      <div id="URoom">
        <div id="URoom--contact">
          <b-img :src="require('../assets/uroom-logo.png')" rounded alt="Rounded image" width=200% ></b-img>
          <p>Lorem ipsum dolor sit amet.</p>
          <div id="social">

          </div>
          <p>hola2</p>
        </div>
        <div id="URoom--f">
          <div>Encuentra tu vivienda ideal</div>
          <div>Decenas de opciones que se ajustan a tus necesidades</div>
          <div>Encuentra en tan solo unos pocos clics</div>
        </div>
      </div>
    </div>
    <div id="foot" >
        <p>UROOM <span>&#169;</span>. Todos los derechos reservados.</p>
        <div class='ml-auto'>   
            <a>Preguntas frecuentes</a>
            <a>Politica de privacidad</a>
            <a>Términos y condiciones</a>
        </div>
        
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Footer',
  props: {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');


#container{
  padding-top:20px;
  margin-top:20px;
  width:100%;
  justify-content: center;
  height: 250px;
  color:white;
  background: rgb(190, 186, 186);
  display:flex;
  flex-direction:column;
  align-items:left;
  font-family: Jost;
}


#URoom{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#URoom--contact{
  text-align:left;
  color: black;
}
#URoom--contact p{
  text-align:left;
  color: black;
  padding: 10px;
}
#URoom--f{
  text-align: left;
  display : flex;
  justify-content : space-between;
  flex-direction:column;
  color:black;
  font-weight: 500;
}
#URoom--f div{
  padding: 20px;
}
#foot {
  width:100%;
  display : flex;
  float: left;
  background:rgb(214, 214, 214);
  font-family: Jost;
  font-size: 12;
  color: rgb(0, 0, 0);
  font-weight: 100;
}
#foot p {
  padding-right: 220px;
  padding-left: 90px;
  padding-top: 20px;
  padding-bottom: 10px;
}
#foot a {
  padding-bottom: 10px;
  padding-right: 90px;
  padding-top: 20px;
  text-align: right;
}
@media (max-width: 1000px) {
  #foot {
    flex-direction:column;
    padding: 10px;
  }
  #foot p {
  padding: 10px;
  }
  #foot a {
    padding: 10px;
  }
  #URoom{
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width:100%;
  }
  #URoom--f div{
  padding: 0px;
  text-align: center;
  }
  #URoom--contact p{
  text-align: center;
  padding: 0px;
  }
  #container{
  
  height: 300px;
  
  }
}

</style>
