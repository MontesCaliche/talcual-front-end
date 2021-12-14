<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <img style="height: 41.53px" src="../assets/logo-oolloo.png" />
      <router-link  class="navbar-brand mx-3" to="/">Tal cual Uam</router-link>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li v-if="isActive" class="nav-item active">
            <router-link class="nav-link" to="/reports"
              >Reportes<span class="sr-only">(current)</span></router-link>
          </li>
          <li v-if="isActive" class="nav-item active">
            <router-link class="nav-link" to="/products"
              >Productos<span class="sr-only">(current)</span></router-link>
          </li>
          <li v-if="!isActive" class="nav-item active">
            <router-link class="nav-link" to="/login"
              >Acceder<span class="sr-only">(current)</span></router-link>
          </li>
          <li v-if="!isActive"  class="nav-item active">
            <router-link class="nav-link" to="/signUp"
              >Registro <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
        <div v-if="isActive" class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">
              <img style="height: 41.53px; width: 41.53px" class="rounded-circle" src="../assets/logo-oolloo.png" />
                <span class="caret "> Perfil</span>
              </button>
              <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li role="presentation" class="mx-2" ><a role="menuitem" tabindex="-1" href="/reports" v-if="rol != 'administrator'">Home</a></li>
                <li role="presentation"  class="mx-2"><a role="menuitem" tabindex="-1" href="" v-if="rol != 'administrator'">Perfil</a></li>
                <li role="presentation" class="mx-2"><a role="menuitem" tabindex="-1"  @click="signOff" href="/login">Cerrar Sesion</a></li>
              </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(['signOff'])
  },
  data() {
    return {
    
    }
  },
  computed: {
    ...mapGetters(["isActive"]),
    ...mapState(["rol","url_img", "userDB"])
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

