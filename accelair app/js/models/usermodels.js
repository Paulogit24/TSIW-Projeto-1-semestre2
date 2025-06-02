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
export function getUBanner() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  return user ? user.banner : "#000000";
}


// função para atualzar o tier do utilizador (imcompleta: falta verificar se o utilizador tem exp suficiente para o tier, e colocar as quantidades corrretas de exp)
export function updatetier() {
  if (exp >= 1000 && exp < 2000) {
    const user = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (user) {
      user.tier = "bronze";
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  if (exp >= 2000 && exp < 3000) {
    const user = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (user) {
      user.tier = "prata";
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  if (exp >= 3000 && exp < 4000) {
    const user = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (user) {
      user.tier = "ouro";
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  if (exp >= 4000 ) {
    const user = JSON.parse(sessionStorage.getItem("loggedUser"));
    if (user) {
      user.tier = "platina";
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}
// addicionar fundos ao utilizador
export function addfunds(funds) {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  if (user) {
    user.funds += funds;
    localStorage.setItem("users", JSON.stringify(users));
  }
}
// Alterar a imagem do utilizador
export function setUserImage(image) {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  if (user) {
    user.userimage = image;
    localStorage.setItem("users", JSON.stringify(users));
  }
}
// Alterar a descrição do utilizador
export function setAboutUser(about) {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  if (user) {
    user.aboutuser = about;
    localStorage.setItem("users", JSON.stringify(users));
  }
}
// Alterar o nome de utilizador
export function setUsername(newUsername) {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  if (user) {
    if (users.some((u) => u.username === newUsername)) {
      throw Error(`User with username "${newUsername}" already exists!`);
    } else {
      user.username = newUsername;
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}
// alterar o banner do utilizador
export function setBanner(newBanner) {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  if (user) {
    user.banner = newBanner;
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// classa do utilizador
class User {
  username = "";
  password = "";
  tier = "";   // possivelmente não necessário
  exp = 0
  banner = "";
  userimage = "";
  aboutuser = "";
  admin = "";
  funds = 0;

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.tier = "tierless";
    this.exp = 0;
    this.banner = "#000000";
    this.userimage = "#000000";
    this.aboutuser = "write something about you";
    this.admin = "false"
    this.funds = 0;	
    
  }
}