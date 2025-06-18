new Chart(document.getElementById('graficoUtilizadores'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr'],
      datasets: [{
        label: 'Utilizadores',
        data: [50, 75, 150, 100],
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  new Chart(document.getElementById('graficoViagens'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr'],
      datasets: [{
        label: 'Viagens Compradas',
        data: [30, 60, 90, 120],
        backgroundColor: 'rgba(40,167,69,0.2)',
        borderColor: 'rgba(40,167,69,1)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  new Chart(document.getElementById('graficoTipos'), {
    type: 'pie',
    data: {
      labels: ['Arquitectónico', 'Praia', 'Aventura', 'Cultural'],
      datasets: [{
        label: 'Tipos de Turismo',
        data: [40, 25, 20, 15],
        backgroundColor: [
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,86,0.6)',
          'rgba(75,192,192,0.6)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54,162,235,1)',
          'rgba(255,206,86,1)',
          'rgba(75,192,192,1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });

  const voos = ["Lisboa - Paris", "Porto - Madrid"];
  const destinos = ["Paris", "Madrid"];
  const tiposTurismo = ["Cultural", "Aventura"];

  function renderizarLista(id, items) {
    const lista = document.getElementById(id);
    lista.innerHTML = "";
    items.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = item;
      const btn = document.createElement("button");
      btn.className = "btn btn-sm btn-danger";
      btn.textContent = "Remover";
      btn.onclick = () => {
        items.splice(i, 1);
        renderizarLista(id, items);
      };
      li.appendChild(btn);
      lista.appendChild(li);
    });
  }

  $('#modalVoos').on('show.bs.modal', () => renderizarLista("lista-voos", voos));
  $('#modalDestinos').on('show.bs.modal', () => renderizarLista("lista-destinos", destinos));
  $('#modalTipos').on('show.bs.modal', () => renderizarLista("lista-tipos", tiposTurismo));

  function adicionarVoo() {
    const input = document.getElementById("novo-voo");
    if (input.value.trim()) {
      voos.push(input.value.trim());
      input.value = "";
      renderizarLista("lista-voos", voos);
    }
  }

  function adicionarDestino() {
    const input = document.getElementById("novo-destino");
    if (input.value.trim()) {
      destinos.push(input.value.trim());
      input.value = "";
      renderizarLista("lista-destinos", destinos);
    }
  }

  function adicionarTipo() {
    const input = document.getElementById("novo-tipo");
    if (input.value.trim()) {
      tiposTurismo.push(input.value.trim());
      input.value = "";
      renderizarLista("lista-tipos", tiposTurismo);
    }
  }