function foreignLanguages(country) {
  let countryName = country;

  switch (countryName) {
    case "England":
    case "USA":
      console.log("English");
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}

foreignLanguages("USA");
