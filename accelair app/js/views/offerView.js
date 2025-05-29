function generateCard(flight) {
  return `
    <div class="col">
      <div class="card mb-3" style="width: 320px;">
        <div class="card-body">
          <h5 class="card-title">${flight.bandName}</h5>
          <p class="card-text">Genre: ${flight.genre}</p>
          <p class="card-text">Members: ${flight.members.join(", ")}</p>
          <button id="${flight.id}" class="btn btn-primary view">View Details</button>
          ${User.isLoggedIn() ? `<button id="${flight.id}" class="btn btn-danger remove">Remove</button>` : ""}
        </div>
      </div>
    </div>`;
}

