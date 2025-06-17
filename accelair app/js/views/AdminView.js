// AdminView.js - Dynamic admin dashboard for AccelAir
import * as FlightModel from "../models/FlightModel.js";

let chartUsers, chartTrips, chartTypes;

function updateCharts() {
  // Example: get data from models or localStorage (replace with real logic)
  const usersData = [50, 75, 150, 100]; // Replace with dynamic data
  const tripsData = [30, 60, 90, 120]; // Replace with dynamic data
  const typesLabels = ["Arquitectónico", "Praia", "Aventura", "Cultural"];
  const typesData = [40, 25, 20, 15]; // Replace with dynamic data

  if (chartUsers) {
    chartUsers.data.datasets[0].data = usersData;
    chartUsers.update();
  }
  if (chartTrips) {
    chartTrips.data.datasets[0].data = tripsData;
    chartTrips.update();
  }
  if (chartTypes) {
    chartTypes.data.labels = typesLabels;
    chartTypes.data.datasets[0].data = typesData;
    chartTypes.update();
  }
}

function renderFlights() {
  const flights = FlightModel.getAll ? FlightModel.getAll() : [];
  const table = document.querySelector("#flights-table tbody");
  if (!table) return;
  table.innerHTML = flights
    .map(
      (flight) => `
    <tr>
      <td>${flight.number}</td>
      <td>${flight.origin}</td>
      <td>${flight.destination}</td>
      <td>${flight.departure}</td>
      <td>${flight.arrival}</td>
      <td>${flight.airline}</td>
      <td>${flight.price}</td>
      <td><button class="btn btn-danger btn-sm" data-id="${flight.id}" onclick="deleteFlight('${flight.id}')">Remover</button></td>
    </tr>
  `
    )
    .join("");
}

window.deleteFlight = function (id) {
  if (FlightModel.remove) FlightModel.remove(id);
  renderFlights();
};

function addFlightView() {
  if (FlightModel.init) FlightModel.init();
  renderFlights();

  const form = document.querySelector("#form-add-flight");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        FlightModel.add(
          document.querySelector("#input-flight-number").value,
          document.querySelector("#input-origin").value,
          document.querySelector("#input-destination").value,
          document.querySelector("#input-departure").value,
          document.querySelector("#input-arrival").value,
          document.querySelector("#input-airline").value,
          document.querySelector("#input-price").value
        );
        alert("Voo adicionado com sucesso!");
        renderFlights();
        event.target.reset();
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

function setupCharts() {
  // Only run if Chart.js is loaded and canvas elements exist
  if (window.Chart) {
    const usersCtx = document.getElementById('graficoUtilizadores');
    const tripsCtx = document.getElementById('graficoViagens');
    const typesCtx = document.getElementById('graficoTipos');
    if (usersCtx) {
      chartUsers = new Chart(usersCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr'],
          datasets: [{
            label: 'Utilizadores',
            data: [50, 75, 150, 100],
            backgroundColor: 'rgba(220,53,69,0.5)',
            borderColor: 'rgba(220,53,69,1)',
            borderWidth: 2
          }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
      });
    }
    if (tripsCtx) {
      chartTrips = new Chart(tripsCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr'],
          datasets: [{
            label: 'Viagens Compradas',
            data: [30, 60, 90, 120],
            backgroundColor: 'rgba(40,167,69,0.2)',
            borderColor: 'rgba(40,167,69,1)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
      });
    }
    if (typesCtx) {
      chartTypes = new Chart(typesCtx, {
        type: 'pie',
        data: {
          labels: ['Arquitectónico', 'Praia', 'Aventura', 'Cultural'],
          datasets: [{
            label: 'Tipos de Turismo',
            data: [40, 25, 20, 15],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)'
            ],
            borderWidth: 1
          }]
        },
        options: { responsive: true }
      });
    }
  }
}

// Example: update charts when flights are added/removed (expand for other data)
function onDataChanged() {
  renderFlights();
  updateCharts();
}

// Call this after any admin action that changes data
window.onAdminDataChanged = onDataChanged;

// Initialize everything on DOMContentLoaded

document.addEventListener("DOMContentLoaded", () => {
  setupCharts();
  addFlightView();
  updateCharts();
});
