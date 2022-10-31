function walking(input) {
  let targetSteps = 10000;
  let i = 0;
  let command = input[i];
  let totalSteps = 0;

  while (command !== "Going home") {
    let steps = Number(command);
    totalSteps +=steps;
    if (totalSteps >= targetSteps) {
        console.log('Goal reached! Good job!'); 
        console.log(`${totalSteps - targetSteps} steps over the goal!`);
        break;
    }
    i++;
    command = input[i]
  }
  
  if (command === "Going home") {
    i++;
    let stepsToHome = Number(input[i]);
    totalSteps += stepsToHome;
    if (totalSteps > targetSteps){
        console.log('Goal reached! Good job!'); 
        console.log(`${totalSteps - targetSteps} steps over the goal!`);
  } else {
    console.log(`${targetSteps - totalSteps} more steps to reach goal.`);
  }
}
  
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"]);

// console.log(`Goal reached! Good job! ${totalSteps - targetSteps} steps over the goal!`);
// console.log(`${targetSteps - totalSteps} more steps to reach goal.`);
