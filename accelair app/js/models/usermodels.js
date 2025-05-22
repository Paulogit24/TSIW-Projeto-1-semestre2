let Users;
let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, password) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  } else {
    users.push(new User(username, password));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}
// devolve o banner do utilizador
export function getUserBanner() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  return user ? user.banner : "#000000";
}

export function setbanner() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  if (user) {
    user.banner = document.querySelector("#banner").value;
    localStorage.setItem("users", JSON.stringify(users));
  }
} 

// classa do utilizador
class User {
  username = "";
  password = "";
  tier = "";
  exp = ""
  banner = "";
  userimage = "";
  aboutuser = "";

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.tier = "tierless";
    this.exp = 0;
    this.banner = "#000000";
    this.userimage = "#000000";
    this.aboutuser = "write something about you";
    
  }
}