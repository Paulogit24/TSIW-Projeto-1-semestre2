function handleSearchSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
        localPartida: form.querySelector('[name="local-partida"]').value,
        dataPartida: form.querySelector('[name="data-partida"]').value,
        numPessoas: form.querySelector('[name="num-pessoas"]').value,
        diasViagem: form.querySelector('[name="dias-viagem"]').value,
        tipoTurismo: form.querySelector('#tipo-turismo').value
    };
    // Aqui você pode enviar os dados para o backend ou atualizar a interface
    console.log('Dados da pesquisa:', data);
    // Exemplo: alert(JSON.stringify(data));
}

export function initSearchView(formSelector) {
    const form = document.querySelector(formSelector);
    if (form) {
        form.addEventListener('submit', handleSearchSubmit);
    }
}

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
