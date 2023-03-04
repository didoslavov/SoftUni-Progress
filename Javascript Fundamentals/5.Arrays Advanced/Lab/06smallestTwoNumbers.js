function smallestTwoNumnbers(numbers) {
    numbers.sort((a, b) => a - b); 
    const sortedArray = numbers.slice(0,2);

    console.log(sortedArray.join(' '));
}

smallestTwoNumnbers([30, 15, 50, 5]);

