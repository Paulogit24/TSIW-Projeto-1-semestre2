let flights;

// CARREGAR VOOS DA LOCALSTORAGE
export function init() {
  flights = localStorage.flights ? JSON.parse(localStorage.flights) : [];
}

// ADICIONAR VOO  (mudar para try/catch para evitar erros)
export function addfligth(flightID, origin, destination, departure, arrival, airline, price) {
  if (flights.some((flight) => flight.flightID === flightID)) {
    throw Error(`Flight with number "${flightID}" already exists!`);
  } else {
    flights.push(new Flight(flightID, origin, destination, departure, arrival, airline, price));
    localStorage.setItem("flights", JSON.stringify(flights));
  }
}

// REMOVER VOO
export function removeFlight(flightID) {
  flights = flights.filter((flight) => flight.flightID !== flightID);
  localStorage.setItem("flights", JSON.stringify(flights));
}

// DEFINIR O VOO ATUAL (AQUELE QUE SERÁ VISTO NO DETALHE)
export function setCurrentFlight(flightID) {
  localStorage.setItem("flight", flightID);
}

// OBTER O VOO ATUAL (OBJETO COMPLETO)
export function getCurrentFlight() {
  return flights.find((flight) => flight.flightID === localStorage.getItem("flight"));
}

// ORDENAR VOOS POR PREÇO OU DATA DE PARTIDA
export function sortFlights(by = "price") {
  if (by === "price") {
    flights.sort((a, b) => a.price - b.price);
  } else if (by === "departure") {
    flights.sort((a, b) => new Date(a.departure) - new Date(b.departure));
  }
}

// OBTER VOOS (COM FILTROS E ORDENAÇÃO)
export function getFlights(filterOrigin = "", filterDestination = "", isSorted = false, sortBy = "price") {
  let filteredFlights = flights.filter(
    (flight) =>
      (flight.origin.toLowerCase().includes(filterOrigin.toLowerCase()) || filterOrigin === "") &&
      (flight.destination.toLowerCase().includes(filterDestination.toLowerCase()) || filterDestination === "")
  );

  filteredFlights = isSorted
    ? filteredFlights.sort((a, b) => sortBy === "price"
        ? a.price - b.price
        : new Date(a.departure) - new Date(b.departure))
    : filteredFlights;

  return filteredFlights;
}

// Classe que modela um voo
class Flight {
  flightID = "";
  origin = "";
  destination = "";
  departure = "";
  arrival = "";
  airline = "";
  price = 0;

  constructor(flightID, origin, destination, departure, arrival, airline, price) {
    this.flightID = flightID; // Default flightID, should be unique
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
    this.arrival = arrival;
    this.airline = airline;
    this.price = price;
  }
}

