import {logout, isLogged, getUserLogged, getUBanner} from "../models/usermodels.js";



let USER = getUserLogged();

const userbanner = document.getElementById('userbanner');
userbanner.src = USER.banner
console.log(USER);