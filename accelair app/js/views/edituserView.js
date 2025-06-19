import {logout, isLogged, getUserLogged, getUBanner, addfunds, setUserImage, setAboutUser,setBanner,setPassword} from "../models/usermodels.js";
let USER = JSON.parse(sessionStorage.getItem('loggedUser'));
const bn1 = document.getElementById(bn1)
const bn2 = document.getElementById(bn2)
const bn3 = document.getElementById(bn3)
const bn4 = document.getElementById(bn4)
const bn5 = document.getElementById(bn5)
const bn6 = document.getElementById(bn6)

bn1.addEventListener('click', () => {     // banner 1
    setBanner("accelair app/img/userbanner1.png")
  });
bn2.addEventListener('click', () => {     // banner 2
    setBanner("accelair app/img/userbanner2.jpg")
  });
bn3.addEventListener('click', () => {     // banner 3
    setBanner("accelair app/img/adminbanner1.jpg")
  });

  const edtabout = document.getElementById("edtabout")
  edtabout.addEventListener( "input", e => {
    newabout = e.target.value
    USER.aboutuser = e
    sessionStorage.setItem('loggedUser', JSON.stringify(USER));
  })