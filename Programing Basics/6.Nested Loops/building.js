function building(input) {
  let floorCount = Number(input[0]);
  let roomCount = Number(input[1]);
  let currentFloor = 0;
  let roomType = "";
  let currentRoom = 0;
  let print = "";

  for (let i = floorCount; i > 0; i--) {
    currentFloor = i;
    for (let j = 0; j < roomCount; j++) {
      if (currentFloor === floorCount) {
        roomType = "L";
      } else if (currentFloor % 2 === 0) {
        roomType = "O";
      } else {
        roomType = "A";
      }
      currentRoom = j;
      print += `${roomType}${currentFloor}${currentRoom} `;
    }
    console.log(print.trim());
    print = "";
  }
}

building(["1", "4"]);
