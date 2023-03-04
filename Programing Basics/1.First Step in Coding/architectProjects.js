function projects(input) {
    let architect = input[0];
    let buildings = input[1];
    let neededHours = buildings * 3;
    console.log(`The architect ${architect} will need ${neededHours} hours to complete ${buildings} project/s.`)
}
projects(['Ivan' , 5])
clear.console