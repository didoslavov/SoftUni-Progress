function createDictionary(data) {
  class Dictionary {
    constructor(term, definition) {
      this.term = term;
      this.definition = definition;
    }
  }
  const dictionaryArr = [];

  for (const object of data) {
    const line = JSON.parse(object);
    const term = Object.keys(line).join('');
    const definition = Object.values(line).join(' ');
    const currentEntrie = {};
    currentEntrie[term] = definition;
    dictionaryArr.push(currentEntrie);
  }
  const newDictionary = dictionaryArr.reduce((a, b) => Object.assign(a, b), {});
  const finalDictionary = Object.keys(newDictionary)
    .sort()
    .reduce((acc, key) => {
      acc[key] = newDictionary[key];
      return acc;
    }, {});

  for (const term in finalDictionary) {
    console.log(`Term: ${term} => Definition: ${finalDictionary[term]}`);
  }
}

createDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
