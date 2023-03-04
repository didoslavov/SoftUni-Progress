function moving(input) {

    let freeSpaceW = Number(input[0]);
    let freeSpaceL = Number(input[1]);
    let freeSpaceH = Number(input[2]);
    let freeSpace = freeSpaceW * freeSpaceL * freeSpaceH;
    let i = 3;
    let command = input[i];
    let boxesSpace = 0;
    let totalBoxes = 0;

        while (command !== "Done" && i < input.length) {
            boxesSpace = Number(command);
            totalBoxes += boxesSpace;

            if (totalBoxes > freeSpace) {
                console.log(`No more free space! You need ${totalBoxes - freeSpace} Cubic meters more.`);
                break;
            }
            i++;
            command = String(input[i]);
        }
            if (command === "Done" && totalBoxes < freeSpace) {
                console.log(`${freeSpace - totalBoxes} Cubic meters left.`);
            }
}

moving(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);
