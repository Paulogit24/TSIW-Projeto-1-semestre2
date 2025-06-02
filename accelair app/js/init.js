window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-70px";
    }
  }
  
initdata();

function initdata() {
  // FLIGHTS
  if (!localStorage.flights) {
    const flights = [
      {
        title: "Paris Mágica e Disneyland",
        flightNumber: "AA123",
        origin: "Porto, PT",
        destination: "Paris, FR",
        departure: "01/06/2025 08:00",
        arrival: "01/06/2025 11:00",
        itinerary: [
          {
            day: "Dia 1 – Chegada a Paris",
            details: "Sugestão: passeio leve pelos Campos Elísios ou jantar num bistrô tradicional."
          },
          {
            day: "Dia 2 – Disneyland Paris (1º dia)",
            details: "Dia inteiro no Parque Disneyland no parque clássico com o Castelo da Bela Adormecida, atrações como 'Piratas das Caraíbas' e 'Peter Pan’s Flight'."
          },
          {
            day: "Dia 3 – Disneyland Paris (2º dia)",
            details: "Segundo dia mágico, agora para explorar o Walt Disney Studios Park (atrações como 'Ratatouille', 'Toy Story Playland' e 'Avengers Campus')."
          },
          {
            day: "Dia 4 – Paris Cultural",
            details: "Dia dedicado a explorar Paris: Torre Eiffel, Museu do Louvre, Bairro de Montmartre e Basílica do Sacré-Cœur."
          },
          {
            day: "Dia 5 – Paris Romântica e Passeio de Barco",
            details: "Manhã para visitar o bairro de Le Marais, com ruas históricas, cafés e pequenas boutiques. À tarde, passeio de barco no Rio Sena, passando por monumentos icónicos como a Catedral de Notre-Dame, o Museu d’Orsay e a Torre Eiffel."
          }
        ]
      },
      // Adicione mais voos conforme necessário
    ];
    localStorage.setItem("flights", JSON.stringify(flights));
  }

   const destinations = [
     {
      tourismType: "Religião",
      duration: "7 dias",
      place: "Paris, França",
      hotel: "Hotel Parisien",
      price: 500,
      image: "imagens/paris.png", // ajuste conforme seu projeto
      description: "Explore a magia de Paris e Disneyland com este pacote incrível."
     },
    ];
    localStorage.setItem("destinations", JSON.stringify(destinations));

  // USERS
  if (!localStorage.users) {
    const users = [
      {
        username: "user1",
        password: "pass1",
      },
      {
        username: "user2",
        password: "pass2",
      },
      // Adicione mais usuários conforme necessário
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
}

