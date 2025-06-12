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

export function removeOffer(offerID) {
  offers = offers.filter((offer) => offer.offerID !== offerID);
  localStorage.setItem("offers", JSON.stringify(offers));
}
export function setCurrentOffer(offerID) {
  localStorage.setItem("offer", offerID);
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