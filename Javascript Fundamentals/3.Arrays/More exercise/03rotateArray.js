function rotateArray(input) {
    const rotations = input.pop();

    for (let i = 0; i < rotations; i++) {
        let element = input.pop();
        input.unshift(element);
    }
    console.log(input.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);