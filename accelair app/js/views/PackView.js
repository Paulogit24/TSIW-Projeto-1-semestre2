// Exemplo de estrutura de dados para o pacote
const pack = {
  departure: "Porto, PT",
  date: "01/06/2025",
  people: "2 adultos, 1 criança",
  days: "7 dias",
  tourismType: "Religião",
  image: "imagens/paris.png", // ajuste o caminho conforme seu projeto
  title: "5 noites | Hotel incluído | Acesso aos Parques Disneyland Paris",
  description: "Explore a magia da Disney e viva o charme da Cidade Luz.",
  price: 500,
  itinerary: [
    {
      day: "Dia 1 – Chegada a Paris",
      details: "Sugestão: passeio leve pelos Campos Elísios ou jantar num bistrô tradicional."
    },
    {
      day: "Dia 2 – Disneyland Paris (1ª dia)",
      details: "Dia inteiro no Parque Disneyland no parque clássico com o Castelo da Bela Adormecida, atrações como 'Piratas das Caraíbas' e 'Peter Pan’s Flight'."
    },
    {
      day: "Dia 3 – Disneyland Paris (2ª dia)",
      details: "Segundo dia mágico, agora para explorar o Walt Disney Studios Park (atrações como 'Ratatouille', 'Toy Story Playland' e 'Avengers Campus')."
    },
    {
      day: "Dia 4 – Paris Cultural",
      details: "Dia dedicado a explorar Paris: Torre Eiffel, Museu do Louvre, Bairro de Montmartre e Basílica do Sacré-Cœur."
    },
    {
      day: "Dia 5 – Paris Romântica e Passeio de Barco",
      details: "Manhã para visitar o bairro de Le Marais, com ruas históricas, cafés e pequenas boutiques. À tarde, passeio de barco no Rio Sena, passando por monumentos icónicos como a Catedral de Notre-Dame, o Museu d’Orsay e a Torre Eiffel."
    }
  ]
};

// Função para renderizar o pacote na página
function renderPack(pack) {
  // Cabeçalho dos filtros
  document.querySelector("#pack-filters").innerHTML = `
    <div class="pack-filters">
      <span>Local de partida: <b>${pack.departure}</b></span>
      <span>Data de partida: <b>${pack.date}</b></span>
      <span>Número de pessoas: <b>${pack.people}</b></span>
      <span>Dias de viagem: <b>${pack.days}</b></span>
      <span>Tipo de turismo: <b>${pack.tourismType}</b></span>
      <button id="btn-edit-pack" class="btn-edit">Deseja mudar algo?</button>
    </div>
  `;

  // Imagem e descrição do pacote
  document.querySelector("#pack-main").innerHTML = `
    <img src="${pack.image}" alt="Imagem do destino" class="pack-img">
    <div class="pack-info">
      <h3>${pack.title}</h3>
      <p>${pack.description}</p>
      <p class="pack-price">Por apenas <span style="color:#E53935;font-weight:bold;">${pack.price}€</span></p>
    </div>
  `;

  // Itinerário
  let itineraryHtml = "";
  for (const item of pack.itinerary) {
    itineraryHtml += `
      <div class="itinerary-day">
        <b>${item.day}</b><br>
        <span>${item.details}</span>
      </div>
    `;
  }
  document.querySelector("#pack-itinerary").innerHTML = `
    <h4 style="color:#E53935;">Itinerário:</h4>
    ${itineraryHtml}
  `;

  // Botão de pagamento
  document.querySelector("#pack-payment").innerHTML = `
    <button id="btn-pay" class="btn-pay">Avançar para pagamento</button>
  `;

  // Evento para editar filtros
  document.querySelector("#btn-edit-pack").addEventListener("click", () => {
    window.history.back();
  });

  // Evento para pagamento
  document.querySelector("#btn-pay").addEventListener("click", () => {
    alert("Redirecionando para pagamento...");
    // location.href = "pagamento.html";
  });
}

// Chame a função ao carregar a página
document.addEventListener("DOMContentLoaded", () => renderPack(pack));
