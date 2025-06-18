
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

function getQueryParams() {
  const params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    params[key] = decodeURIComponent(value);
  });
  return params;
}



