import * as FlightModel from "../models/FlightModel.js";

function addFlightView() {
  FlightModel.init();

  // IDs adaptados para um formulário de voos
  document.querySelector("#form-add-flight").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      FlightModel.add(
        document.querySelector("#input-flight-number").value,
        document.querySelector("#input-origin").value,
        document.querySelector("#input-destination").value,
        document.querySelector("#input-departure").value,
        document.querySelector("#input-arrival").value,
        document.querySelector("#input-airline").value,
        document.querySelector("#input-price").value
      );
      alert("Voo adicionado com sucesso!");

      setTimeout(() => {
        location.href = "../index.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

addFlightView();
