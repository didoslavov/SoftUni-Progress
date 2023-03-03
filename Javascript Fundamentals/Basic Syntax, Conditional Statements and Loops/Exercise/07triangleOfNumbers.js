function triangleDrawer(number) {
    for (let i = 1; i <= number; i++) {
        let printResult = [];
        for (let j = 1; j <= i; j++) {
            printResult.push(i);
        }
        console.log(printResult.join(' '));
    }
}

triangleDrawer(6)