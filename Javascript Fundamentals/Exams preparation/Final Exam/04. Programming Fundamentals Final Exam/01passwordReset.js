function passwordReset(input) {
  let string = input.shift();
  let line = input.shift();

  while (line !== 'Done') {
    const [command, ...params] = line.split(' ');

    switch (command) {
      case 'TakeOdd':
        string = string.split('').filter((_, i) => i % 2 !== 0).join('');
        console.log(string);
        break;
      case 'Cut':
        const [index, length] = params;
        string = string.slice(0, Number(index)) + string.slice(Number(index) + Number(length));
        console.log(string);
        break;
      case 'Substitute':
        const [substring, substitute] = params;
        if (!string.includes(substring)) {
            console.log('Nothing to replace!');
        } else {
            while (string.includes(substring)) {
                string = string.replace(substring, substitute);
            }
            console.log(string);
        }
        break;
    }

    line = input.shift();
  }

  console.log(`Your password is: ${string}`);
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);
