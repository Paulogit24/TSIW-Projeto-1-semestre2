//model para os destinos da app
let Destinations;

// CARREGAR destinoS DA LOCALSTORAGE
export function init() {
  Destination = localStorage.Destination ? JSON.parse(localStorage.Destination) : [];
}

// ADICIONAR destino  (mudar para try/catch para evitar erros)
export function addfligth(DestinationNumber, origin, destination, departure, arrival, airline, price) {
  if (Destination.some((Des) => Des.DestinationNumber === DestinationNumber)) {
    throw Error(`Des with number "${DestinationNumber}" already exists!`);
  } else {
    Destination.push(new Des(DestinationNumber, origin, destination, departure, arrival, airline, price));
    localStorage.setItem("Destination", JSON.stringify(Destination));
  }
}

// REMOVER destino
export function removeDes(DestinationNumber) {
  Destination = Destination.filter((Des) => Des.DestinationNumber !== DestinationNumber);
  localStorage.setItem("Destination", JSON.stringify(Destination));
}

// DEFINIR O destino ATUAL (AQUELE QUE SERÁ VISTO NO DETALHE)
export function setCurrentDes(DestinationNumber) {
  localStorage.setItem("Des", DestinationNumber);
}

// OBTER O destino ATUAL (OBJETO COMPLETO)
export function getCurrentDes() {
  return Destination.find((Des) => Des.DestinationNumber === localStorage.getItem("Des"));
}

// ORDENAR destinoS POR PREÇO OU DATA DE PARTIDA
export function sortDestination(by = "price") {
  if (by === "price") {
    Destination.sort((a, b) => a.price - b.price);
  } else if (by === "departure") {
    Destination.sort((a, b) => new Date(a.departure) - new Date(b.departure));
  }
}

// OBTER destinoS (COM FILTROS E ORDENAÇÃO)
export function getDestination(filterOrigin = "", filterDestination = "", isSorted = false, sortBy = "price") {
  let filteredDestination = Destination.filter(
    (Des) =>
      (Des.origin.toLowerCase().includes(filterOrigin.toLowerCase()) || filterOrigin === "") &&
      (Des.destination.toLowerCase().includes(filterDestination.toLowerCase()) || filterDestination === "")
  );

  filteredDestination = isSorted
    ? filteredDestination.sort((a, b) => sortBy === "price"
        ? a.price - b.price
        : new Date(a.departure) - new Date(b.departure))
    : filteredDestination;

  return filteredDestination;
}

class Destination {
  constructor(name, description, image, location, price, category) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.location = location;
    this.price = price;
    this.category = category;
  }
}