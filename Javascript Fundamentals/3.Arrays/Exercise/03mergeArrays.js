function mergeInNewArray(firstArray, secondArray) {
    const newArray = [];
    const firstArrayLength = firstArray.length;

    for (let i = 0; i < firstArrayLength; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            newArray.push(firstArray[i] + secondArray[i]);
        }
    }
    console.log(newArray.join(' - '));
}

mergeInNewArray(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);