<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <img style="height: 41.53px" src="../assets/logo-oolloo.png" />
      <router-link  class="navbar-brand mx-3" to="/">Tal cual Uam</router-link>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li  class="nav-item active">
            <router-link class="nav-link" to="/reports"
              >Reportes<span class="sr-only">(current)</span></router-link>
          </li>
          <li  class="nav-item active">
            <router-link class="nav-link" to="/products"
              >Productos<span class="sr-only">(current)</span></router-link>
          </li>
          <li  class="nav-item active">
            <router-link class="nav-link" to="/login"
              >Acceder<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/signUp"
              >Registro <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Navbar",
  methods: {
  },
  computed: {
  },
};
</script>

<style>
.navbar{
 background:  linear-gradient(70deg, #007771, #9ae2d4);
  color:white !important;
}
.drop{
  margin-right: 150px !important;
}

.imagen{
  width: 40px;
  height: 40px;
}
</style>

