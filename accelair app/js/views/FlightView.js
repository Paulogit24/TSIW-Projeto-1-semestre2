import * as FlightModel from "../models/FlightModel.js";

function flightView() {
  FlightModel.init();

  const flight = FlightModel.getCurrentFlight();
  if (!flight) return;

  document.querySelector("#flightNumber").innerHTML = flight.flightNumber;
  document.querySelector("#flightOrigin").innerHTML = flight.origin;
  document.querySelector("#flightDestination").innerHTML = flight.destination;
  document.querySelector("#flightDeparture").innerHTML = flight.departure;
  document.querySelector("#flightArrival").innerHTML = flight.arrival;
  document.querySelector("#flightAirline").innerHTML = flight.airline;
  document.querySelector("#flightPrice").innerHTML = `€${flight.price}`;
}

flightView();
