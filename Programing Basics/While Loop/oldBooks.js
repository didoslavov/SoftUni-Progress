function oldBooks(input) {
  let i = 1;
  let favouriteBook = input[0];
  let currentBook = input[i];
  let checkedBooks = 0;

  while (currentBook !== "No More Books") {
    currentBook = input[i];
    if (currentBook === favouriteBook || currentBook === "No More Books") {
      break;
    }
    i++;
    checkedBooks++;
  }
  if (currentBook === favouriteBook) {
    console.log(`You checked ${checkedBooks} books and found it.`);
  } else {
    console.log("The book you search is not here!");
    console.log(`You checked ${checkedBooks} books.`);
  }
}

oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
