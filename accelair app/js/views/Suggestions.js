export function getSuggestions(input) {
    const suggestions = document.querySelector(".suggestions");
    suggestions.innerHTML = ""; // Limpa sugestões anteriores

    suggestions.forEach((item) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");

        const Imagem = document.createElement("img");
        Imagem.src = item.image;
        Imagem.alt = item.name;
        suggestionItem.appendChild(Imagem);

        const name = document.createElement("h3");
        title.textContent = item.name;
        suggestionItem.appendChild(name);
 })
}