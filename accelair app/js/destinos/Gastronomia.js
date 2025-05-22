// Classe para modelar uma comida típica de um destino
class OptionFood {
  destination = "";
  name = "";
  image = "";
  description = "";

  /**
   * @param {string} destination - Nome do destino (ex: "Japão")
   * @param {string} name - Nome do prato (ex: "Sushi")
   * @param {string} image - Caminho ou URL da imagem do prato
   * @param {string} description - Descrição curta do prato
   */
  constructor(destination, name, image, description) {
    this.destination = destination;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  // Gera o HTML do card de comida
  toHTML() {
    return `
      <div class="food-card">
        <img src="${this.image}" alt="${this.name}">
        <div class="food-name">${this.name}</div>
      </div>
    `;
  }
}

// Exemplo de uso para o destino "Japão"
const japanFoods = [
  new OptionFood("Japão", "Sushi", "imagens/sushi.jpg", "Arroz temperado com peixe cru."),
  new OptionFood("Japão", "Ramen", "imagens/ramen.jpg", "Sopa de macarrão com caldo e acompanhamentos."),
  new OptionFood("Japão", "Tempura", "imagens/tempura.jpg", "Legumes e frutos do mar empanados e fritos."),
  new OptionFood("Japão", "Monjayaki", "imagens/monjayaki.jpg", "Panqueca japonesa grelhada.")
];

// Função para renderizar os cards de comida para um destino
function renderFoodOptions(foodOptions, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = foodOptions.map(food => food.toHTML()).join('');
}

// Exemplo de chamada (supondo um container com id="food-list" no HTML):
// renderFoodOptions(japanFoods, "#food-list");