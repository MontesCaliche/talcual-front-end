<template>
  <div id="app">
    <Navbar />
      <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import {mapActions} from 'vuex'
export default {
  components: {
    Navbar,
  },
  methods: {
      ...mapActions(['readToken'])
  },
  created () {
     this.readToken();
  },

};
</script>


<style>
#app {
  font-family: Hero;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
