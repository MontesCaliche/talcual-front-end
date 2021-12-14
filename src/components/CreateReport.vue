<template>
  <div>
    <div
      class="modal fade"
      id="modalCreateReport"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Crear Reporte</h3>
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
                <label for="inputTitle">Título</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputTitle"
                  aria-describedby="reportTitle"
                />
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="inputLastPrice">Precio anterior</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputLastPrice"
                    />
                  </div>
                  <div class="col">
                    <label for="inputCurrentPrice">Precio actual</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputCurrentPrice"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="inputReportcategory">Categoría del reporte</label>
                <select class="form-control" id="inputReportcategory">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="inputDescription"
                  >Descripción</label
                >
                <textarea
                  class="form-control"
                  id="inputDescription"
                  rows="3"
                ></textarea>
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
            <button type="button" class="btn btn-primary">
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
export default {
  name: "createReport",
  data() {
    return {
      message: "",
      message2: "",
    };
  },
};
</script>

<style></style>
