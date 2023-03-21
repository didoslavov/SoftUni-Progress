function worldTour(input) {
  let stops = input.shift();
  let line = input.shift();

  while (line !== 'Travel') {
    const [command, ...travelInfo] = line.split(':');

    switch (command) {
      case 'Add Stop':
        const [index, string] = travelInfo;
        const isValid = index >= 0 && index < stops.length;
        
        if (isValid) stops = stops.slice(0, index) + string + stops.slice(index);
        console.log(stops);
        break;
      case 'Remove Stop':
        const [startIndex, endIndex] = travelInfo;
        const validStart = startIndex >= 0 && startIndex < stops.length;
        const validEnd = endIndex >= 0 && endIndex < stops.length;
        
        if (validStart && validEnd) stops = stops.slice(0, Number(startIndex)) + stops.slice(Number(endIndex) + 1);
        console.log(stops);
        break;
      case 'Switch':
        const [oldString, newString] = travelInfo;

        if(stops.includes(oldString)) {
            stops = stops.replace(oldString, newString);
        }
        console.log(stops);
        break;
    }

    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]));
