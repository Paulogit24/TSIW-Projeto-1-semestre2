// Classe que modela uma opção de voo extra (para cards de sugestões)
class Option {
  destination = "";
  tourismType = "";
  description = "";
  image = "";
  link = "";

  /**
   * @param {string} destination - Nome do destino (ex: "Roma")
   * @param {string} tourismType - Tipo de turismo (ex: "Cultural", "Gastronômico")
   * @param {string} description - Descrição curta do destino
   * @param {string} image - Caminho ou URL da imagem do destino
   * @param {string} link - Link para saber mais ou reservar
   */
  constructor(destination, tourismType, description, image, link) {
    this.destination = destination;
    this.tourismType = tourismType;
    this.description = description;
    this.image = image;
    this.link = link;
  }

  // Gera o HTML do card para ser usado na interface
  toHTML() {
    return `
      <div class="opcao-card">
        <img src="${this.image}" alt="${this.destination}">
        <div>
          <p>${this.description}</p>
          <a href="${this.link}" class="interesse-link">
            Interessado? Clique aqui para saber mais.
          </a>
        </div>
      </div>
    `;
  }
}

