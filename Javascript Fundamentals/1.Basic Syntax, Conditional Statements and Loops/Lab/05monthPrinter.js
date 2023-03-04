function monthPrinter(integer) {
  let monthInteger = integer;

  if (monthInteger == 1) {
    console.log("January");
  } else if (monthInteger == 2) {
    console.log("February");
  } else if (monthInteger == 3) {
    console.log("March");
  } else if (monthInteger == 4) {
    console.log("April");
  } else if (monthInteger == 5) {
    console.log("May");
  } else if (monthInteger == 6) {
    console.log("June");
  } else if (monthInteger == 7) {
    console.log("July");
  } else if (monthInteger == 8) {
    console.log("August");
  } else if (monthInteger == 9) {
    console.log("September");
  } else if (monthInteger == 10) {
    console.log("October");
  } else if (monthInteger == 11) {
    console.log("November");
  } else if (monthInteger == 12) {
    console.log("December");
  } else {
    console.log("Error!");
  }
}

monthPrinter(14);
