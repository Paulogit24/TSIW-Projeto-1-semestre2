import {logout, isLogged, getUserLogged, getUBanner} from "../models/usermodels.js";

getUserLogged();

const userbanner = document.getElementById('userbanner');
userbanner.src = getUBanner();