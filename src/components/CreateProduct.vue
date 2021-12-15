<template>
  <div>
    <div
      class="modal fade"
      id="modalCreateProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Crear Producto</h3>
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
            <form>
              <div class="form-group">
                <label for="inputTitle">Nombre del producto</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  aria-describedby="reportTitle"
                  v-model="product.name"
                />
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="inputPrice">Precio</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputtPrice"
                      v-model="product.price"
                    />
                  </div>
                  <div class="col">
                    <label for="inputCity">Ciudad</label>
                    <input v-model="product.city" type="text" class="form-control" id="inputCity" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="inputReportcategory">Categoría del producto</label>
                <select v-model="product.category" class="form-control" id="inputReportcategory">
                  <option>Alimenticio</option>
                  <option>Ferreteria</option>
                  <option>Juguetería</option>
                  <option>Herramientas</option>
                  <option>Tecnología</option>
                  <option>Electrodomesticos</option>
                </select>
              </div>
              <div class="form-group">
                <label  for="inputDescription">Descripción</label>
                <textarea
                  class="form-control"
                  id="inputDescription"
                  rows="3"
                  v-model="product.description"
                ></textarea>
              </div>
              <div>
                <img id="previewSingle" class="imagen" src="../assets/producto.jpg" />
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
                  class="btn btnPregunta btn-sm"
                  type="button"
                  value="Seleccionar Imágen del producto"
                  name="btn-upload-image"
                  id="btn-upload-image"
                />
              </div>
              <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button @click="createProduct" type="button" class="btn btn-primary">
              Guardar cambios
            </button>
          </div>

          <!-- Message Notification -->
          <div v-if="message != ''">
            <div class="alert alert-success mt-3" role="alert">
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
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "createReport",
  data() {
    return {
      message: "",
      message2: "",
      product:{
        name:'',
        price:'',
        city:'',
        category:'',
        description:''
      }
    };
  },
  methods: {
    createProduct(){
      let file = document.getElementById("formFile").files;

      let formData = new FormData();

      formData.append("productName", this.product.name);
       formData.append("user_id", this.userDB.data._id);
      formData.append("productPrice", this.product.price);
      formData.append("productCity", this.product.price);
      formData.append("productCategory", this.product.category);
      formData.append("productDescription", this.product.description);
      formData.append("file-img", file[0]);
      formData.append("urlServer", this.axios.defaults.baseURL);
      
      if (!file || !file.length) {
        formData.append("containFile", false);
      } else {
        formData.append("containFile", true);
      }

      this.axios.post('/products',formData,{
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res)=>{
           location.reload()
        }).catch(err=>console.log(err.response))

    },
    previewImgUser: function () {
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
  mounted() {
    this.previewImgUser();
  },
  computed: {
    ...mapState(["url_img", "userDB"]),
  },
};
</script>

<style>
.imagen {
  width: 150px;
  height: 150px;
}
</style>
