function areaOfFigures(input) {

    let figure = input[0];
    
    if (figure === "square") {
        let sideOfSquare = Number(input[1]);
        console.log((sideOfSquare * sideOfSquare).toFixed(3));
    } else if (figure === "rectangle") {
        let sideOfRectangle1 = Number(input[1]);
        let sideOfRectangle2 = Number(input[2]);
        console.log((sideOfRectangle1 * sideOfRectangle2).toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        console.log((Math.PI * Math.pow(radius,2)).toFixed(3));
    } else if (figure === "triangle") {
        let sideOfTriangle = Number(input[1]);
        let h = Number(input[2]);
        console.log((sideOfTriangle * h / 2).toFixed(3));
    } 

}

areaOfFigures(["triangle",
"4.5",
"20"]);