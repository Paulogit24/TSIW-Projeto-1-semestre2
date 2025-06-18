
export  default function initSearchView(formSelector) {
    const form = document.querySelector(formSelector);
    if (form) {
        form.addEventListener('submit', handleSearchSubmit);
    }


 
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
 
}
initdata()
const DestinationCardTemplate = document.getElementById('DestinationCardTemplate');
const DestinationCardContainer = document.getElementById('destinationID');
const localsearch = document.getElementById('local');
const namesearch = document.getElementById('name');
const durationsearch = document.getElementById('duration');
const turismsearch = document.getElementById('turismtype');

let destination = JSON.parse(localStorage.getItem("destination")) || [];
console.log(destination)

// store card
const cards = [];

/* //search by local
localsearch.addEventListener('input', local => {
  const localValue = local.target.value.toLowerCase();
  console.log(localValue);
  destination.forEach(destination => {
    const isvisible = destination.location.toLowerCase().includes(localValue);
    User.element.classList.toggle('hide', !isvisible);
  })})*/


//card generation
destination.forEach(destination => {
  const card = DestinationCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector('[head]');
  const body = card.querySelector('[body]');
  const duration = card.querySelector('[duration]');
  const type = card.querySelector('[type]');
  header.textContent = destination.name;
  body.textContent = destination.location;
  duration.textContent = "Duração: " + destination.duration + " dias";
  type.textContent = destination.category;
  DestinationCardContainer.append(card);
  cards.push({ location: destination.location,name: destination.name,type: destination.category, element: card });
});

// Search by local
localsearch.addEventListener('input', e => {
  const localValue = e.target.value.toLowerCase();
  cards.forEach(cardObj => {
    const isVisible = cardObj.location.toLowerCase().includes(localValue);
    cardObj.element.classList.toggle('hide', !isVisible);
  });
});

// Search by name
namesearch.addEventListener('input', e => {
  const nameValue = e.target.value.toLowerCase();
  cards.forEach(cardObj => {
    const isVisible = cardObj.name.toLowerCase().includes(nameValue);
    cardObj.element.classList.toggle('hide', !isVisible);
  });
});

// Search by type

turismsearch.addEventListener('input', e => {
  const typeValue = e.target.value.toLowerCase();
  cards.forEach(cardObj => {
    const isVisible = cardObj.type.toLowerCase().includes(typeValue);
    cardObj.element.classList.toggle('hide', !isVisible);
  });
});




/*function generateMainCard(flight) {
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
          <button class="btn btn-primary view" id="${flight.number}">Ver detalhes</button>          </div>
          <img src="${flight.image}" class="card-img-top" style="height: 180px; object-fit:cover; border-radius: 12px 12px 0 0;">
        </div>
    </div>
    `;   
    return result;
}*/

/*function generateCard(flight) {
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
}*/



function getQueryParams() {
  const params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    params[key] = decodeURIComponent(value);
  });
  return params;
}



function renderResults() {
  const params = getQueryParams();
  const resultsContainer = document.getElementById('search-results');
  let filtered = destinos;
  if (params['tipo-turismo']) {
    filtered = filtered.filter(d => d.turismo.toLowerCase().includes(params['tipo-turismo'].toLowerCase()));
  }
  // Adicione outros filtros conforme necessário

  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<div class="col-12"><p class="text-muted">Nenhum destino encontrado.</p></div>';
    return;
  }
  resultsContainer.innerHTML = filtered.map(dest => `
    <div class="col-md-4 mb-4">
      <div class="card border-0 shadow-sm rounded h-100">
        <img src="${dest.imagem}" class="card-img-top" alt="${dest.cidade}">
        <div class="bg-danger text-white p-2">
          <h5 class="mb-0 font-weight-bold">${dest.cidade}</h5>
          <small>${dest.pais} &ndash; ${dest.turismo}</small>
        </div>
      </div>
    </div>
  `).join('');
}

/*document.addEventListener("DOMContentLoaded", () => renderSet(0));

  function showRegister() {
    document.getElementById('loginScreen').classList.add('d-none');
    document.getElementById('registerScreen').classList.remove('d-none');
  }

  function showLogin() {
    document.getElementById('registerScreen').classList.add('d-none');
    document.getElementById('loginScreen').classList.remove('d-none');
  }

  document.getElementById("btnLogin").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin") {
    window.location.href = "html/admin/admin.html";
  } else {
    alert("Nome de utilizador ou palavra-passe incorretos.");
  }
});

document.addEventListener('DOMContentLoaded', renderResults);*/