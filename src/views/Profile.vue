<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="card w-100 mt-5">
          <div class="card-title">
            <div>
              <img
                id="previewSingle"
                class="imagen my-3 rounded-circle"
                :src="url_img"
              />
              <br />
              <input
                accept="image/*"
                type="file"
                class="d-none"
                name="image-profile"
                id="formFile"
              />
              <input
                onclick="document.getElementById('formFile').click()"
                class="btn  btnPregunta btn-sm"
                type="button"
                value="Seleccionar Imágen"
                name="btn-upload-image"
                id="btn-upload-image"
              />
              <button @click="uploadPhoto" class="btn  btnPregunta btn-sm mx-1">
                Actualizar
              </button>
            </div>
              <div v-if=" messageProfile != ''">
              <div class="alert alert-warning mt-3" role="alert">
                <strong>{{  messageProfile2 }}</strong>
                {{  messageProfile }}
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
          <div class="card-body">
            <form>
              <!-- fila 1-->
              <div class="row">
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupNamesInput" class=""
                    >Nombre</label
                  >
                  <input
                    v-model="userDB.data.name"
                    type="text"
                    class="form-control"
                    id="formGroupNamesInput"
                    placeholder="Tus nombres van aquí"
                  />
                </div>
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupEmailInput" class=""
                    >correo electronico</label
                  >
                  <input
                    v-model="userDB.data.email"
                    disabled
                    type="email"
                    class="form-control"
                    id="formGroupEmailInput"
                    placeholder="Aquí va tu correo electrónico"
                  />
                </div>

              </div>
              <!-- fila 2-->
              <div class="row">
                
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupNationalityInput" class=""
                    >Pais</label
                  >
                  <select
                    v-model="userDB.data.country"
                    id="formGroupNationalityInput"
                    class="form-control"
                    placeholder="¿Cuál es tu país de orígen?"
                  >
                    <option disabled selected value="">
                      Selecciona tu país 
                    </option>
                    <option
                      v-for="(country, index) in countries"
                      :key="index"
                      :value="country.name"
                      >{{ country.name }}</option
                    >
                  </select>
                </div>
              
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupPhoneInput" class=""
                    >Telefono de contacto</label
                  >
                  <input
                    v-model="userDB.data.phone"
                    type="text"
                    class="form-control"
                    id="formGroupPhoneInput"
                    placeholder="Proporcionanos tu teléfono para contactarte"
                  />
                </div>
              </div>
              <!-- fila 2-->
              <div class="row">
                
                
              </div>
              <!-- fila 3-->
              <div class="row">
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupExampleInput" class=""
                    >Fecha de nacimiento</label
                  >
                  <input
                    v-model="userDB.data.birth"
                    type="date"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
                  />
                </div>
              </div>
              <!-- fila 4-->
           
              <div class="row">
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupFacebookInput" class=""
                    >Facebook</label
                  >
                  <input
                    v-model="userDB.data.facebook"
                    type="text"
                    class="form-control"
                    id="formGroupFacebookInput"
                    placeholder="Aquí va el link de tu Facebook"
                  />
                </div>
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupInstagramInput" class=""
                    >Instagram</label
                  >
                  <input
                    v-model="userDB.data.instagram"
                    type="text"
                    class="form-control"
                    id="formGroupInstagramInput"
                    placeholder="Aquí va el link de tu Instagram"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6 col-12">
                  <label for="formGroupTwitterInput" class=""
                    >Twitter</label
                  >
                  <input
                    v-model="userDB.data.twitter"
                    type="text"
                    class="form-control"
                    id="formGroupTwitterInput"
                    placeholder="Aquí va el link de tu Twitter"
                  />
                </div>
                <div class="form-group col-sm-6 col-12">
                  <label for="formGrouplinkedinInput" class=""
                    >linkedIn</label
                  >
                  <input
                    v-model="userDB.data.linkedin"
                    type="text"
                    class="form-control"
                    id="formGrouplinkedinInput"
                    placeholder="Aquí va el link de tu linkedIn"
                  />
                </div>
              </div>
              <div>
                <button class="btn btnPregunta" @click.prevent="uploadDates">
                  Actualizar
                </button>
              </div>
            </form>
            <div v-if="message != ''">
              <div class="alert alert-warning mt-3" role="alert">
                <strong>{{ message2 }}</strong>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      countries: [],
      message: "",
      message2: "",
      messageProfile:"",
      messageProfile2:""
    };
  },
  methods: {
    ...mapActions(["changeCodeCountry"]),
    ShowSelected() {
      const nameCountry = document.getElementById("inputResidenceCountry")
        .value;

      const country = this.countries.filter((p) => p.name == nameCountry);

      if (country.length > 0) {
        this.changeCodeCountry(country[0].codephone);
      }
    },
    chargeCountries() {
      this.axios.get("/countries/countries.json").then((res) => {
        this.countries = res.data.countries;
       // console.log(this.countries);
      });
    },
    uploadDates() {
      this.axios
        .put(`/dates/${this.userDB.data._id}`, this.userDB.data)
        .then((res) => {
          if (res.status === 200) {
            this.message = "Datos actualizados con éxito";
            this.message2 = "Muy bien!";
          } else {
            this.message = "Algo salió mal, intenta de nuevo";
            this.message2 = "Error!";
          }
        });
    },
    uploadPhoto() {
      let file = document.getElementById("formFile").files;

      let formData = new FormData();

      formData.append("user_id", this.userDB.data._id);
      formData.append("url_img", file[0]);
      formData.append("urlServer", this.axios.defaults.baseURL);

      if (!file || !file.length) {
        formData.append("containFile", false);
      } else {
        formData.append("containFile", true);
      }

      this.axios
        .put("/upload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
           if (res.data.acknowledged){
             this.messageProfile = "Imágen de perfil actualizada con éxito"
             this.messageProfile2 = "Muy bien!"
           }else{
              this.messageProfile = "Algo salió mal, porfavor intenta de nuevo"
               this.messageProfile2 = "Error!"
           }
        });
    },
    previewImgUser: function() {
      let previewSingle = document.getElementById("previewSingle");
      let formFile = document.getElementById("formFile");

      if (formFile != null) {
        formFile.addEventListener("change", () => {
          let _file = formFile.files;

          if (!_file || !_file.length) {
            previewSingle.src = this.my.img;
            return;
          }

          const firstFile = _file[0];
          const objUrl = URL.createObjectURL(firstFile);
          previewSingle.src = objUrl;
        });
      }
    },
  },
  computed: {
    ...mapState(["url_img", "userDB"]),
  },
  mounted() {
    this.previewImgUser();
    this.chargeCountries();
  },
};
</script>

<style>
.card {
  background: #9ae2d4;
  border: 2px solid white;
  border-radius:15px;
  color:#14254C;
  font-style: italic;
  font-weight: bolder;
}

.imagen {
  width: 150px;
  height: 150px;
}

.btnPregunta{
  background: white;
  color:#007771;
}
.btnPregunta:hover{
  background: #007771;
  color:white;
}
</style>
