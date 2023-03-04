function findCommonElements(firstArray, secondArray) {
  for (const firstArrayElement of firstArray) {
    for (const secondArrayElement of secondArray) {
      if (firstArrayElement === secondArrayElement) {
        console.log(firstArrayElement);
      }
    }
  }
}

findCommonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);
