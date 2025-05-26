
class Packs {
    price = "";
    destinations = [];
    image = "";
    xp = "";
    itinerary = "";
    description = "";

    constructor(price, destinations, image, xp, itinerary, description) {
        this.price = price;
        this.destinations = destinations; // Array de destinos
        this.image = image; // Imagem do pacote
        this.xp = xp; // Experiência necessaria para o pacote
        this.itinerary = itinerary; // Itinerário do pacote
        this.description = description; // Descrição do pacote
    }
}