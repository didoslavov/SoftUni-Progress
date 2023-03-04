function loadingBar(number) {
  const percentagesCount = (startingNum) => {
    return startingNum / 10;
  };

  const dotsCount = () => {
    return (100 - percentagesCount(number)) / 10;
  };

  const loading = () => {
    const bar = [];
    const counter = percentagesCount(number);

    for (let i = 0; i < counter; i++) {
      bar.push('%');
    }
    for (let i = 0; i < dotsCount(); i++) {
      bar.push('.');
    }
    return bar.join('');
  };

  console.log(`${number}% [${loading()}]`);
  console.log('Still loading...');
}

loadingBar(30);
