function extractIncreasingSubsetFromArray(numbers) {
  let biggest = Number.MIN_SAFE_INTEGER;

  return numbers.reduce((acc, num) => {
    if (num >= biggest) {
      biggest = num;
      acc.push(biggest);
    }
    return acc;
  }, []);
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('-----------');
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log('-----------');
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
