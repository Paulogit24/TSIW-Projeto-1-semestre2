import { getCurrentdestination, init } from '../models/destinationmodels.js';

init();

/*document.addEventListener("DOMContentLoaded", () => renderSet(0));

  function showRegister() {
    document.getElementById('loginScreen').classList.add('d-none');
    document.getElementById('registerScreen').classList.remove('d-none');
  }

  function showLogin() {
    document.getElementById('registerScreen').classList.add('d-none');
    document.getElementById('loginScreen').classList.remove('d-none');
  }

  document.getElementById("btnLogin").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin") {
    window.location.href = "html/admin/admin.html";
  } else {
    alert("Nome de utilizador ou palavra-passe incorretos.");
  }
});*/

let destination = JSON.parse(localStorage.getItem("destination")) || [];

const DESTINO = getCurrentdestination();

console.log(DESTINO);


const localinfo = document.getElementById('local');
const nameinfo = document.getElementById('name');
const durationinfo = document.getElementById('duration');
const turisminfo = document.getElementById('turismtype');
