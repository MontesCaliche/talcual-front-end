<template>
  <div class="container my-5">
    <div class="row">
      <div class="card my-3 w-50 mx-auto  login1">
        <div class="card-body">
          <img class="imagen my-3" src="../assets/pagWeb.png" />
          <h3 class="mx-auto my-3 ">Inicio de Sesion</h3>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Correo electrónico</label
              >
              <input
                type="email"
                class="form-control"
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
              <a
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
                href=""
                >Olvidaste la contraseña?</a
              >
            </div>

            <button type="submit" class="btn btn-outline-primary btn-block">
              Iniciar Sesion
            </button>
            <div class="my-3  mx-auto" id="google-signin">google</div>
            
            <!-- <div id="google-signin" class="col-md-12 my-2"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"> Iniciar sesión con google</a> </div>-->
          </form>
          <div v-if="message != ''">
            <div class="alert alert-warning mt-3" role="alert">
              <strong>Algo Salio Mal!</strong>
              {{ message }}
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Digita tu correo electrónico</h5>
                  <input class="form-control" type="text" v-model="email" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                Enviar correo de recuperación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: { email: "", password: "" },
      message: "",
      email: "",
    };
  },
  methods: {
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
  
  },
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
  color:#14254C
}

.imagen {
  width: 120px;
  height: 120px;
}



.abcRioButtonLightBlue{
  background-color: transparent !important;
  color: #14254C !important;
 border: 3px solid #14254C;
  border-radius: 5px !important;
  margin-left:auto;
  margin-right: auto;
  width:180px !important;
}
.abcRioButtonContents{
  font-family: Hero !important;
  font-size: 18px !important;
}
</style>
