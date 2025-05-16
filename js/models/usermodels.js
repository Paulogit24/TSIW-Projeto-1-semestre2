let Users;
// função init para inicializar o array de usuários
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}