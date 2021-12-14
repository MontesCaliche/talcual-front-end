<template>
  <div class="container" id="bienvenidaLogin">
    <div class="row">
      <div class="cardss my-2 mensaje">
        <div class="card w-50 mx-auto card1">
          <div class="card-body justify-content-between align-items-center">
            <div class="contenedor mx-auto">
              <img
                class="australia"
                src="../assets/uluru.jpg"
                alt="australia"
              />
            </div>

            <button
              type="button"
              class="btn btn-primary btonHelp"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              <i class="bi bi-question-circle"></i>
            </button>
            <div class="details">
              <h5 class="mb-3">Bienvenid@!</h5>

              <p class="mb-3 fw-bold">
                En esta plataforma vas a poder revisar, comprar y opinar sobre
                los precios que tienen los productos de los almacenes de la
                ciudad, aquí podras calificar, reportar y así poder analisar en
                que lugar es el mejor para comprar, del mismo modo se notificará
                al almacen de tal forma que la aplicación ayuda a regular los
                precios de los productor allí registrados.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Ayúdame a entender</h5>
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
              <p class="mb-3 fw-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus vel quidem aliquid perspiciatis porro fugit
                consequuntur. Nemo, consequuntur quae veritatis ab dicta
                consequatur iusto similique maiores? Dolores consequatur libero
                nam!
              </p>
              <p class="mb-3">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus vel quidem aliquid perspiciatis porro fugit
                consequuntur. Nemo, consequuntur quae veritatis ab dicta
                consequatur iusto similique maiores? Dolores consequatur libero
                nam!
              </p>
              <p class="mb-3">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus vel quidem aliquid perspiciatis porro fugit
                consequuntur. Nemo, consequuntur quae veritatis ab dicta
                consequatur iusto similique maiores? Dolores consequatur libero
                nam!
              </p>
              <p class="mb-3">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus vel quidem aliquid perspiciatis porro fugit
                consequuntur. Nemo, consequuntur quae veritatis ab dicta
                consequatur iusto similique maiores? Dolores consequatur libero
                nam!
              </p>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mensaje {
  margin-left: auto;
  margin-right: auto;
  background: transparent !important;
  color: #14254c;
}
.btonHelp {
  margin-left: auto;
  margin-right: 0;
  background: transparent !important;
  border: none;
  font-size: 20px;
  color: #14254c !important;
}
.australia {
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
}

.cardss {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 5px;
  grid-gap: 20px;
}
.card {
  background-color: #9ae2d4;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
}
.contenedor {
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  margin-left: auto;
  margin-right: auto;
}

.contenedor:after {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px 20px 0 0;
  opacity: 0.7;
}
.details {
  padding: 20px 10px;
}
</style>
