import {logout, isLogged, getUserLogged, getUBanner} from "../models/usermodels.js";



let USER = getUserLogged();
console.log(USER);

const userbanner = document.getElementById('userbanner');
userbanner.src = USER.banner


const userNam = document.getElementById('usernam');
userNam.textContent = USER.username;

const about = document.getElementById('about');
about.textContent = USER.aboutuser;

const userimg =  document.getElementById('userimg');
userimg.src = USER.userimage;

const ex =  document.getElementById('ex');
ex.textContent = USER.exp + " exp";

const money =  document.getElementById('money');
money.textContent = "fundos: "+ USER.funds+ " €";

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', () => {     // butom para a página destino
    window.location.href = "editarperfil.html";
  });