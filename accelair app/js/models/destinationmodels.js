//model para os destinos da app   verificar se o nome das variaveis nas funções está correto


// CARREGAR destinoS DA LOCALSTORAGE
export function init() {
  destination = localStorage.destination ? JSON.parse(localStorage.destination) : [];
}

// ADICIONAR destino  (mudar para try/catch para evitar erros)
export function addDestination(destinationID, origin, destination, departure, arrival, airline, price) {
  if (destination.some((destination) => destination.destinationID === destinationID)) {
    throw Error(`destination with number "${destinationID}" already exists!`);
  } else {
    destination.push(new destination(destinationID, origin, destination, departure, arrival, airline, price));
    localStorage.setItem("destination", JSON.stringify(destination));
  }
}

// alterar um destino (mudar para try/catch para evitar erros)
export function updateDestination(destinationID, updatedData) {
  const index = destination.findIndex((destination) => destination.destinationID === destinationID);
  if (index !== -1) {
    destination[index] = { ...destination[index], ...updatedData };
    localStorage.setItem("destination", JSON.stringify(destination));
  } else {
    throw Error(`destination with ID "${destinationID}" not found!`);
  }
}

// REMOVER destino
export function removedestination(destinationID) {
  destination = destination.filter((destination) => destination.destinationID !== destinationID);
  localStorage.setItem("destination", JSON.stringify(destination));
}

// DEFINIR O destino ATUAL (AQUELE QUE SERÁ VISTO NO DETALHE)
export default function setCurrentdestination(destinationID) {
  localStorage.setItem("setdestination", destinationID);
}

// OBTER O destino ATUAL (OBJETO COMPLETO)
export function getCurrentdestination() {
  return destination.find((destination) => destination.destinationID === localStorage.getItem("setdestination"));
}

// ORDENAR destinoS POR PREÇO OU DATA DE PARTIDA
export function sortdestination(by = "price") {
  if (by === "price") {
    destination.sort((a, b) => a.price - b.price);
  } else if (by === "counter") {
    destination.sort((a, b) => new Date(a.counter) - new Date(b.counter));
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
let destinations;
// Classe que modela um destino

class destination {
  destinationID = "00000000";
  name = "name";
  description = "destination description";
  image = "image-url";
  location = "location";
  price = "price";
  counter = 0;
  duration = 3;
  category = "category";

  constructor(destinationID, name, description, image, location, price, category) {
    this.destinationID = destinationID;
    this.name = name;
    this.description = description;
    this.image = image;
    this.location = location;
    this.duration = 3; // Default duration
    this.price = price;
    this.category = category;
  }
}

//let destination = [];