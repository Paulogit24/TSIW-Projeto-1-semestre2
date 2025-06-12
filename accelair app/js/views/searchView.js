function handleSearchSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {
        localPartida: form.querySelector('[name="local-partida"]').value,
        dataPartida: form.querySelector('[name="data-partida"]').value,
        numPessoas: form.querySelector('[name="num-pessoas"]').value,
        diasViagem: form.querySelector('[name="dias-viagem"]').value,
        tipoTurismo: form.querySelector('#tipo-turismo').value
    };
    // Aqui você pode enviar os dados para o backend ou atualizar a interface
    console.log('Dados da pesquisa:', data);
    // Exemplo: alert(JSON.stringify(data));
}

export function initSearchView(formSelector) {
    const form = document.querySelector(formSelector);
    if (form) {
        form.addEventListener('submit', handleSearchSubmit);
    }
}