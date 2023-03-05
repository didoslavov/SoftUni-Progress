function negativePositiveNumbers(numbers) {
    const result = [];

    for (const number of numbers) {
        number >= 0 ? result.push(number) : result.unshift(number);
    }

    return result.join('\n');
}