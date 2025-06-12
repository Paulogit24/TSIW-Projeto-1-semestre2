let offer

export function init() {
  offers = localStorage.offers ? JSON.parse(localStorage.offers) : [];
}

export function addOffer(offerID, name, description, image, price, category) {
  if (offers.some((offer) => offer.offerID === offerID)) {
    throw Error(`Offer with ID "${offerID}" already exists!`);
  } else {
    offers.push(new Offer(offerID, name, description, image, price, category));
    localStorage.setItem("offers", JSON.stringify(offers));
  }
}

// ALTERAR uma oferta
export function updateOffer(offerID, updatedData) {
  const index = offers.findIndex((offer) => offer.offerID === offerID);
  if (index !== -1) {
    offers[index] = { ...offers[index], ...updatedData };
    localStorage.setItem("offers", JSON.stringify(offers));
  } else {
    throw Error(`Offer with ID "${offerID}" not found!`);
  }
}


export function removeOffer(offerID) {
  offers = offers.filter((offer) => offer.offerID !== offerID);
  localStorage.setItem("offers", JSON.stringify(offers));
}
export function setCurrentOffer(offerID) {
  localStorage.setItem("offer", offerID);
}

// DEFINIR a oferta ATUAL (AQUELE QUE SERÁ VISTO NO DETALHE)
export function setCurrentOffer(offerID) {
  localStorage.setItem("currentOffer", offerID);
}

// OBTER a oferta ATUAL (OBJETO COMPLETO)
export function getCurrentOffer() {
  return offers.find((offer) => offer.offerID === localStorage.getItem("currentOffer"));
}

// ORDENAR ofertas POR PREÇO
export function sortOffers(by = "price") {
  if (by === "price") {
    offers.sort((a, b) => a.price - b.price);
  }
}


// OBTER ofertas (COM FILTROS E ORDENAÇÃO)
export function getOffers(filterName = "", filterCategory = "", isSorted = false, sortBy = "price") {
  let filteredOffers = offers.filter(
    (offer) =>
      (offer.name.toLowerCase().includes(filterName.toLowerCase()) || filterName === "") &&
      (offer.category.toLowerCase().includes(filterCategory.toLowerCase()) || filterCategory === "")
  );

  filteredOffers = isSorted
    ? filteredOffers.sort((a, b) => sortBy === "price"
        ? a.price - b.price
        : 0)
    : filteredOffers;

  return filteredOffers;
}


class Offer {
  offerID = "00000000";
  name = "name";
  description = "description";
  image = "image-url";
  price = 0;
  category = "category";
  items = [];
  // items são as viagems que estão associadas a esta oferta, como voos, hotéis, etc.
  exp = "0"; // Exp é a quantidade de exp necessária para desbloquear a oferta

  constructor(offerID, name, description, image, price, category) {
    this.offerID = offerID;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.category = category;
    this.items = [];
    this.exp = 0; // Inicializa exp como 0, pode ser alterado posteriormente
  }
}