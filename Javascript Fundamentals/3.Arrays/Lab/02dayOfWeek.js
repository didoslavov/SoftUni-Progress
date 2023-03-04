function dayOfWeek(count) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (0 >= count || count > days.length) {
    console.log("Invalid day!");
  } else {
    console.log(days[count - 1]);
  }
}

dayOfWeek(5);
