function requiredReading(numberOfPages, pagesRead, daysRequired) {
  let hoursPerBook = numberOfPages / pagesRead / daysRequired;

  console.log(hoursPerBook);
}

requiredReading(212, 20, 2);
