class Destination {
    tourismType = "";
    duration = "";
    place = "";
    hotel = "";
    price = 0;
    image = "";
    description = "";
    
    constructor(tourismType, duration, place, hotel, price, image, description) {
        this.tourismType = tourismType;
        this.duration = duration;
        this.place = place;
        this.hotel = hotel;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}