import * as Band from "../models/BandModel.js";

function addBandView() {
  Band.init();

  // Adaptação para IDs e campos do Figma
  document.querySelector("#form-add-band").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      Band.add(
        document.querySelector("#input-band-name").value,
        document.querySelector("#select-band-genre").value,
        document.querySelector("#input-band-cover").value,
        document.querySelector("#input-band-description").value,
        document.querySelector("#input-band-music").value
      );
      alert("Banda adicionada com sucesso!");

      setTimeout(() => {
        location.href = "../index.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

addBandView();
