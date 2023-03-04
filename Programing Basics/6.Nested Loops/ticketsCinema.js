function cinemaTickets(input) {
  let movieName = input[0];
  let freeSeats = Number(input[1]);
  index = 0;
  let soldTickets = 0;
  let studentTickets = 0;
  let standartTickets = 0;
  let kidTickets = 0;
  let totalTickets = 0;

  while (movieName !== "Finish") {
    index++;
    freeSeats = Number(input[index]);
    index++;
    let ticketType = input[index];

    while (ticketType !== "End") {
      soldTickets++;
      switch (ticketType) {
        case "student":
          studentTickets++;
          break;
        case "standard":
          standartTickets++;
          break;
        case "kid":
          kidTickets++;
          break;
        default:
          break;
      }
      if (soldTickets >= freeSeats) {
        break;
      }
      index++;
      ticketType = input[index];
    }
    totalTickets += soldTickets;
    console.log(
      `${movieName} - ${((soldTickets / freeSeats) * 100).toFixed(2)}% full.`
    );
    soldTickets = 0;
    index++;
    movieName = input[index];
  }
  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standartTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(
    `${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`
  );
}

cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
