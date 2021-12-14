<template>
  <div class="container my-2">
    <div class="row">
      <div class="card mx-auto my-3 w-50">
        <div class="card-body">
          <img class="imagen my-3" src="../assets/pagWeb.png" />
          <h3 class="mx-auto my-3">Crear Cuenta</h3>
          <form @submit.prevent="createUser">
            <div class="mb-3">
              <label for="input-name" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="input-name"
                v-model="user.name"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="input-email" class="form-label"
                >Correo electrónico</label
              >
              <input
                type="email"
                class="form-control"
                id="input-email"
                v-model="user.email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="input-password" class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="input-password"
                v-model="user.password"
              />
            </div>
            <div class="mb-3">
              <label for="input-rpassword" class="form-label"
                >Repita la contraseña</label
              >
              <input
                type="password"
                class="form-control"
                id="input-rpassword"
                v-model="rpassword"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Crear mi cuenta
            </button>
            <div class="my-3 mx-auto" id="google-signin">google</div>
          </form>
          <div v-if="message != ''">
            <p>{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions} from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      user: { name: "", email: "", password: "" },
      rpassword: "",
      message: "",
    };
  },
  methods: {
    ...mapActions(["saveUser"]),
    createUser() {
      if (this.user.password === this.rpassword) {
        if (this.user.password.length >= 8) {
          this.axios
            .post("/new-user", this.user)
            .then((res) => {
              this.axios
                .post("/login", {
                  email: this.user.email,
                  password: this.user.password,
                })
                .then((res) => {
                  const token = res.data.token;
                  this.saveUser(token);
                });
            })
            .catch((err) => {
              console.log(err.response)
              this.message = err.response.data.message;
            });
        } else {
          this.message = "La contraseña debe contener 8 o mas caracteres";
        }
      } else {
        this.message = "Las contraseñas no coinciden";
      }
    },

    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
  },
  computed: {},
  mounted() {
    gapi.signin2.render("google-signin", {
      onsuccess: this.onSignIn,
    });
  },
};
</script>

<style>
.card {
  background: transparent !important;
  border: 3px solid #9ae2d4;
  color: #14254c;
}

.imagen {
  width: 100px;
  height: 100px;
}
</style>
