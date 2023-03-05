function deSerializeString(input) {
  let line = input.shift();
  const stringArray = [];

  while (line !== 'end') {
    let [char, indexes] = line.split(':');
    indexes = indexes.split('/').map((x) => Number(x));

    for (const index of indexes) {
      stringArray[index] = char;
    }

    line = input.shift();
  }

  const string = stringArray.join('');
  console.log(string);
}

deSerializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
console.log('--------------');
deSerializeString([
  'a:0/3/5/11',
  'v:1/4',
  'j:2',
  'm:6/9/15',
  's:7/13',
  'd:8/14',
  'c:10',
  'l:12',
  'end',
]);
