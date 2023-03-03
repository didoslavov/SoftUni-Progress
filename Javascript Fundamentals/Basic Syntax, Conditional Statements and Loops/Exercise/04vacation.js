function vacationExpenses(groupCount, groupType, weekDay) {
  let pricePerPerson = 0;

  switch (groupType) {
    case 'Students':
      switch (weekDay) {
        case 'Friday':
          pricePerPerson = 8.45;
          break;
        case 'Saturday':
          pricePerPerson = 9.8;
          break;
        case 'Sunday':
          pricePerPerson = 10.46;
          break;
      }
      break;
    case 'Business':
      switch (weekDay) {
        case 'Friday':
          pricePerPerson = 10.9;
          break;
        case 'Saturday':
          pricePerPerson = 15.6;
          break;
        case 'Sunday':
          pricePerPerson = 16;
          break;
      }
      break;
    case 'Regular':
      switch (weekDay) {
        case 'Friday':
          pricePerPerson = 15;
          break;
        case 'Saturday':
          pricePerPerson = 20;
          break;
        case 'Sunday':
          pricePerPerson = 22.5;
          break;
      }
      break;
  }
  let expenses = groupCount * pricePerPerson;

  switch (groupType) {
    case 'Students':
        if (groupCount >= 30) {
            expenses *= 0.85;
        }
      break;
    case 'Business':
        if (groupCount >= 100) {
            expenses = (groupCount - 10) * pricePerPerson;
        }
      break;
    case 'Regular':
        if (groupCount >= 10 && groupCount <= 20) {
            expenses *= 0.95;
        }
      break;
  }

  console.log(`Total price: ${expenses.toFixed(2)}`);
}

vacationExpenses(40,
    "Regular",
    "Saturday");
