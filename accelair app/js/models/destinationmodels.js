//model para os destinos da app   verificar se o nome das variaveis nas funções está correto
let destinations;

// CARREGAR destinoS DA LOCALSTORAGE
export function init() {
  destination = localStorage.destination ? JSON.parse(localStorage.destination) : [];
}

// ADICIONAR destino  (mudar para try/catch para evitar erros)
export function addDestination(destinationNumber, origin, destination, departure, arrival, airline, price) {
  if (destination.some((destination) => destination.destinationNumber === destinationNumber)) {
    throw Error(`destination with number "${destinationNumber}" already exists!`);
  } else {
    destination.push(new destination(destinationNumber, origin, destination, departure, arrival, airline, price));
    localStorage.setItem("destination", JSON.stringify(destination));
  }
}

// REMOVER destino
export function removedestination(destinationNumber) {
  destination = destination.filter((destination) => destination.destinationNumber !== destinationNumber);
  localStorage.setItem("destination", JSON.stringify(destination));
}

// DEFINIR O destino ATUAL (AQUELE QUE SERÁ VISTO NO DETALHE)
export function setCurrentdestination(destinationNumber) {
  localStorage.setItem("destination", destinationNumber);
}

// OBTER O destino ATUAL (OBJETO COMPLETO)
export function getCurrentdestination() {
  return destination.find((destination) => destination.destinationNumber === localStorage.getItem("destination"));
}

// ORDENAR destinoS POR PREÇO OU DATA DE PARTIDA
export function sortdestination(by = "price") {
  if (by === "price") {
    destination.sort((a, b) => a.price - b.price);
  } else if (by === "departure") {
    destination.sort((a, b) => new Date(a.departure) - new Date(b.departure));
  }
}

// OBTER destinoS (COM FILTROS E ORDENAÇÃO)
export function getdestination(filterOrigin = "", filterdestination = "", isSorted = false, sortBy = "price") {
  let filtereddestination = destination.filter(
    (destination) =>
      (destination.origin.toLowerCase().includestination(filterOrigin.toLowerCase()) || filterOrigin === "") &&
      (destination.destination.toLowerCase().includestination(filterdestination.toLowerCase()) || filterdestination === "")
  );

  filtereddestination = isSorted
    ? filtereddestination.sort((a, b) => sortBy === "price"
        ? a.price - b.price
        : new Date(a.departure) - new Date(b.departure))
    : filtereddestination;

  return filtereddestination;
}

class destination {
  constructor(name, destinationcription, image, location, price, category) {
    this.name = name;
    this.destinationcription = destinationcription;
    this.image = image;
    this.location = location;
    this.price = price;
    this.category = category;
  }
}