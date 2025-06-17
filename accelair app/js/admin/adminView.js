document.addEventListener('DOMContentLoaded', function () {
  // Exemplo: mostrar mensagem de boas-vindas
  const welcome = document.getElementById('admin-welcome');
  if (welcome) {
    welcome.textContent = 'Bem-vindo, administrador!';
  }

  // Exemplo: manipular botões de gestão (adicionar, remover, editar)
  const addBtn = document.getElementById('admin-add');
  if (addBtn) {
    addBtn.addEventListener('click', function () {
      alert('Função de adicionar (exemplo)');
    });
  }

  // Exemplo: carregar dados fictícios de utilizadores/destinos
  // (Substitua por fetch/axios para dados reais)
  const usersTable = document.getElementById('admin-users');
  if (usersTable) {
    usersTable.innerHTML = `
      <tr><td>user1</td><td>user1@email.com</td><td>Ativo</td></tr>
      <tr><td>user2</td><td>user2@email.com</td><td>Inativo</td></tr>
    `;
  }
});

// Adicione mais funções conforme as necessidades da página admin.html
