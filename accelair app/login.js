import login from './js/models/usermodels.js';

window.addEventListener('scroll', function () {
  const navbar = document.querySelector("#navbar nav");
  const loginBtn = document.querySelector(".login-btn");

  if (window.scrollY > 100) {
    navbar.classList.add("navbar-branco");
    loginBtn.classList.add("text-danger");
    loginBtn.classList.remove("text-white");
  } else {
    navbar.classList.remove("navbar-branco");
    loginBtn.classList.remove("text-danger");
    loginBtn.classList.add("text-white");
  }
});

const sets = [
  [
    { cidade: "Paris", pais: "França", turismo: "Arquitetónico", imagem: "img/viagens-para-si/paris01.png" },
    { cidade: "Barcelona", pais: "Espanha", turismo: "Arquitetónico", imagem: "img/viagens-para-si/barcelona01.png" },
    { cidade: "Nova York", pais: "Estados Unidos", turismo: "Arquitetónico", imagem: "img/viagens-para-si/novayork01.png" },
    { cidade: "Roma", pais: "Itália", turismo: "Histórico", imagem: "img/viagens-para-si/roma01.png" },
    { cidade: "Londres", pais: "Inglaterra", turismo: "Arquitetónico", imagem: "img/viagens-para-si/londres01.png" }
  ],
  [
    { cidade: "Tóquio", pais: "Japão", turismo: "Cultural", imagem: "img/viagens-para-si/toquio01.png" },
    { cidade: "Dubai", pais: "Emirados", turismo: "Arquitetónico", imagem: "img/viagens-para-si/dubai01.png" },
    { cidade: "Praga", pais: "Rep. Checa", turismo: "Arquitetónico", imagem: "img/viagens-para-si/praga01.png" },
    { cidade: "Rio", pais: "Brasil", turismo: "Sol/Praia", imagem: "img/viagens-para-si/rio01.png" },
    { cidade: "Istambul", pais: "Turquia", turismo: "Cultural", imagem: "img/viagens-para-si/istambul01.png" }
  ]
];

let currentSet = 0;

function renderSet(index) {
  const container = document.getElementById("carousel-container");
  container.innerHTML = "";
  sets[index].forEach(dest => {
    container.innerHTML += `
      <div class="card-destino" style="background-image: url('${dest.imagem}')">
        <h5 class="fw-bold">${dest.cidade}</h5>
        <p>${dest.pais}</p>
        <small>Turismo: ${dest.turismo}</small>
      </div>
    `;
  });
}
window.renderSet = renderSet

function changeSet(direction) {
  const container = document.getElementById("carousel-container");
  container.classList.add("fade-out");
  setTimeout(() => {
    currentSet = (currentSet + direction + sets.length) % sets.length;
    renderSet(currentSet);
    container.classList.remove("fade-out");
  }, 500);
}
window.changeSet = changeSet

document.addEventListener("DOMContentLoaded", () => renderSet(0));

  function showRegister() {
    document.getElementById('loginScreen').classList.add('d-none');
    document.getElementById('registerScreen').classList.remove('d-none');
  }
  window.showRegister = showRegister
  function showLogin() {
    document.getElementById('registerScreen').classList.add('d-none');
    document.getElementById('loginScreen').classList.remove('d-none');
  }
  window.showLogin = showLogin;

  document.getElementById("btnLogin").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin") {
    window.location.href = "html/admin/admin.html";
  } else {
    alert("Nome de utilizador ou palavra-passe incorretos.");
  }
});

let destination = JSON.parse(localStorage.getItem("users")) || [];

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("btnLogin");

button.addEventListener('click', () => {     // butom para a página destino
    console.log(username);
    console.log(password);
  });
console.log(username);
console.log(password);