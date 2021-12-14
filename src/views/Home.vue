<template>
  <div class="container">
    <WelcomeMessage />
    <router-link  class="btn btn-success" to="/signUp">Registrarme !</router-link>
  </div>
</template>

<script>
import WelcomeMessage from "../components/WelcomeMessage.vue";
export default {
  name: "Home",
  components: {
    WelcomeMessage,
  },
  data() {
    return {
    
    };
  },
  methods: {
  },
  created() {

  },

};
</script>

<style >
.bton1 {
  float: left;
}
.btnPreguntaAb{
  background: #007771;
  color:white;
}

.btnPregunta{
  background: white;
  color:#007771;
}
.btnPregunta:hover{
  background: #007771;
  color:white;
}
.porcentaje{
  color: #007771;
  font-style: italic;
  font-weight: bolder;
}
.alenacion {
  border: 3px solid #9ae2d4;
  margin-left: auto;
  margin-right: auto;
  background: white;
}

.cards {
  background: #9ae2d4;
  border: 3px solid white;
  border-radius:15px;
  color:#14254C
}

.list-group-item {
  margin: 0px;
  padding: 0px;
  border: 0px;
  background: transparent !important;
}

.atras{
  background: transparent;
  border: none;
  font-size: 30px;
  color:#007771
}

.form-check {
    
    text-align: left !important;
}


</style>
