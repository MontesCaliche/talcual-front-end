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
          <button data-toggle="modal" data-target="#modalCreateReport" class="btn btn-lg btn-success">Crear reporte</button>
      </div>
      <div class="row">
        <div class="col my-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col my-3">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/reporte.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">REPORTE</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">ver mas...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateReport />
  </div>
</template>

<script>
import CreateReport from "../components/CreateReport.vue";
export default {
  components: {
    CreateReport,
  },
};
</script>

<style>
.search {
  width: 50%;
}
</style>
