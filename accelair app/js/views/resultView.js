function generateMainCard(flight) {
  let result = `
    <div class="col">
      <div class="card mb-3" style="width: 450px;">
        <div class="card-body">
          <h5 class="card-title">${flight.origin} → ${flight.destination}</h5>
          <p class="card-text">Número do voo: ${flight.number}</p>
          <p class="card-text">Data de partida: ${flight.departure}</p>
          <p class="card-text">Data de chegada: ${flight.arrival}</p>
          <p class="card-text">Companhia aérea: ${flight.airline}</p>
          <p class="card-text">Preço: <span style="color:#E53935;font-weight:bold;">${flight.price}€</span></p>
          <button class="btn btn-primary view" id="${flight.number}">Ver detalhes</button>
          </div>
          <img src="${flight.image}" class="card-img-top" style="height: 180px; object-fit:cover; border-radius: 12px 12px 0 0;">
        </div>
    </div>
    `;   
    return result;
}

function generateCard(flight) {
  let result = `
    <div class="col">
      <div class="card mb-3" style="width: 320px;">
        <div class="card-body">
          <h5 class="card-title">${flight.origin} → ${flight.destination}</h5>
          <p class="card-text">Número do voo: ${flight.number}</p>
          <p class="card-text">Data de partida: ${flight.departure}</p>
          <p class="card-text">Data de chegada: ${flight.arrival}</p>
          <p class="card-text">Companhia aérea: ${flight.airline}</p>
          <p class="card-text">Preço: <span style="color:#E53935;font-weight:bold;">${flight.price}€</span></p>
          <button class="btn btn-primary view" id="${flight.number}">Ver detalhes</button>
          </div>
          <img src="${flight.image}" class="card-img-top" style="height: 180px; object-fit:cover; border-radius: 12px 12px 0 0;">
        </div>
    </div>
    `;   
    return result;
}

