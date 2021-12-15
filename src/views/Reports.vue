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
          <button data-toggle="modal" data-target="#modalCreateReport"  class="btn btn-lg btn-success">Crear reporte</button>
      </div>
      <div class="row">
        <div v-for="(report, index) in reports" :key="index" class="col my-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="report.imageurl" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{report.title}}</h5>
              <label for="">Precio Anterior: {{report.lastPrice}}</label>
              <label for="">Precio Actual: {{report.currentPrice}}</label>
              <label for="">Categoria: {{report.category}}</label>
              <p class="card-text">
                {{report.description}}
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
      </div>
      <CreateReport />
    </div>
  </div>
</template>

<script>
import CreateReport from "../components/CreateReport.vue";
import { mapState } from "vuex";
export default {
  components: {
    CreateReport,
  },
   computed: {
    ...mapState(["userDB","token"]),
  },
    data() {
    return {
      reports: []
    }
  },
  created () {

    const token = this.token;

    let config = {
                headers: {
                    token
                }
            }
    this.axios("/reports",config).then((res)=>{
      this.reports = res.data;
      console.log(res.data)
    }).catch(err=>console.log(err))
  },
};
</script>

<style>
.search {
  width: 50%;
}
</style>
