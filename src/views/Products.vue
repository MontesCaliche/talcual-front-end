<template>
  <div class="template">
    <div class="container">
      <!-- Search bar  -->
      <div class="row">
        <div class="container-sm search">
          <div class="input-group rounded my-4">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Búsqueda"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button class="input-group-text border-0" id="search-addon">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Reports -->
    <div class="container-fluid">
      <div class="row mx-3">
          <button data-toggle="modal" data-target="#modalCreateProduct"  class="btn btn-lg btn-success">Crear producto</button>
      </div>
      <div class="row">
        <div v-for="(product, index) in products" :key="index" class="col my-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="product.imageurl" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{product.productName}}</h5>
              <label for="">Ciudad: {{product.productCity}}</label>
              <label for="">Categoria: {{product.productCategory}}</label>
              <label for="">Precio: {{product.productPrice}}</label>
              <p class="card-text">
                {{product.productDescription}}
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
      </div>
      <CreateProduct />
    </div>
  </div>
</template>

<script>
import CreateProduct from "../components/CreateProduct.vue";
import { mapState } from "vuex";
export default {
  components: {
    CreateProduct,
  },
  data() {
    return {
      products: []
    }
  },
  created () {

    const token = this.token;

    let config = {
                headers: {
                    token
                }
            }
    this.axios("/products",config).then((res)=>{
      this.products = res.data;
    }).catch(err=>console.log(err))
  },
  computed: {
    ...mapState(["userDB","token"]),
  },
};
</script>

<style>
.search {
  width: 50%;
}
</style>
