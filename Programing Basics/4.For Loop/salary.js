function salary(input) {
  let openedTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (i = 2; i <= input.length; i++) {
    let tabName = input[i];
    switch (tabName) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
    if (salary <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }
  if (salary > 0) {
    console.log(Math.floor(salary));
  }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
