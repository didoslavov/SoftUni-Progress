function sortArrayBy2Criteria(array) {
  return array
    .sort(
      (a, b) =>
        a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())
    )
    .join('\n');
}

console.log(sortArrayBy2Criteria(['alpha', 'beta', 'gamma']));
console.log('-------------');
console.log(
  sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
);
console.log('-------------');
console.log(sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']));
