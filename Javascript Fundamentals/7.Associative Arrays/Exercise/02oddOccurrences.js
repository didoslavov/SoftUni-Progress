function oddOccurrences(input) {
  const words = input.split(' ').map(word => word.toLowerCase());
  const elements = {};
  let counter = 1;
  
  for (const word of words) {
    if (!elements.hasOwnProperty(word)) {
      elements[word] = counter;
    } else {
      elements[word ] += counter;
    }
  }

  const result = [];
  for (const word in elements) {
    if (elements[word] % 2 === 1) {
      result.push(word);
    }
  }
  console.log(result.join(' '));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
