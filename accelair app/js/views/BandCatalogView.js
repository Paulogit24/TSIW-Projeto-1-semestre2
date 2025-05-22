import * as User from "../models/UserModel.js";
import * as FlightModel from "../models/BandModel.js";

function catalogView() {
  FlightModel.init();

  renderCatalog(FlightModel.getFlights());

  // FILTRAR VOOS
  document.querySelector("#btnFilter").addEventListener("click", () => {
    renderCatalog(
      FlightModel.getFlights(
        document.querySelector("#txtOrigin").value,
        document.querySelector("#txtDestination").value,
        false
      )
    );
  });

  // ORDENAR VOOS
  document.querySelector("#btnSort").addEventListener("click", () => {
    FlightModel.sortFlights(document.querySelector("#sltSort").value);
    renderCatalog(FlightModel.getFlights());
  });
}

// EXIBIR O CATÁLOGO DE VOOS
function renderCatalog(flights = []) {
  let result = "";
  for (const flight of flights) {
    result += generateCard(flight);
  }
  document.querySelector("#myCatalog").innerHTML = result;

  // VER MAIS DETALHES DO VOO
  const btnsSeeMore = document.getElementsByClassName("view");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      FlightModel.setCurrentFlight(button.id);
      location.href = "./html/resultado.html";
    });
  }

  // REMOVER VOO (apenas para admin/logado)
  const btnsRemove = document.getElementsByClassName("remove");
  for (const button of btnsRemove) {
    button.addEventListener("click", () => {
      if (confirm("Deseja mesmo remover este voo?")) {
        FlightModel.removeFlight(button.id);
        location.reload();
      }
    });
  }
}

// GERAR CARTÃO DE VOO
function generateCard(flight) {
  let result = `
    <div class="col">
      <div class="card mb-3" style="width: 320px;">
        <img src="imagens/destino.png" class="card-img-top" style="height: 180px; object-fit:cover; border-radius: 12px 12px 0 0;">
        <div class="card-body">
          <h5 class="card-title">${flight.origin} → ${flight.destination}</h5>
          <p class="card-text">
            <b>Partida:</b> ${flight.departure}<br>
            <b>Chegada:</b> ${flight.arrival}<br>
            <b>Companhia:</b> ${flight.airline}<br>
            <b>Preço:</b> €${flight.price}
          </p>
          <button id="${flight.flightNumber}" class="btn btn-primary view">Ver mais</button>
  `;
  if (User.isLogged()) {
    result += `<button id="${flight.flightNumber}" class="btn btn-danger remove">Remover</button>`;
  }
  result += `
        </div>
      </div>
    </div>
  `;
  return result;
}

catalogView();