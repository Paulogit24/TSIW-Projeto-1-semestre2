let Users;
// função init para inicializar o array de usuários
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// função para adicinar uum utilizador


// classa do utilizador
class User {
  username = "";
  password = "";
  tier = "";
  exp = ""
  banner = "";
  userimage = "";

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.tier = "tierless";
    this.exp = 0;
    this.banner = "#000000";
    this.userimage = "#000000";
  }
}