function argumentInfo() {
  const counter = {};

  Array.from(arguments).forEach((a) => {
    const type = typeof a;
    console.log(`${type}: ${a}`);

    if (!counter.hasOwnProperty(type)) {
      counter[type] = 0;
    }

    counter[type]++;
  });

  Object.keys(counter)
    .sort((a, b) => counter[b] - counter[a])
    .forEach((c) => {
      console.log(`${c} = ${counter[c]}`);
    });
}

argumentInfo('cat', 42, function () {
  console.log('Hello world!');
});
