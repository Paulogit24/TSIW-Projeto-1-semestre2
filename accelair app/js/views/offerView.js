function generateCard(offer) {
  return `
    <div class="col">
      <div class="card mb-3" style="width: 320px;">
        <img src="${offer.image || 'imagens/destino.png'}" class="card-img-top" alt="${offer.destination}">
        <div class="card-body">
          <h5 class="card-title">${offer.destination}</h5>
          <p class="card-text">Preço: ${offer.price}€</p>
          <p class="card-text">Datas: ${offer.dates}</p>
          <p class="card-text">Companhia: ${offer.airline}</p>
          <button id="view-${offer.id}" class="btn btn-primary view">Ver detalhes</button>
          ${User.isLoggedIn() ? `<button id="remove-${offer.id}" class="btn btn-danger remove">Remover</button>` : ""}
        </div>
      </div>
    </div>`;
}

