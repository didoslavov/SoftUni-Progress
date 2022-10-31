function password(input) {
  let username = input[0];
  let password = input[1];
  let pass = 0;
  let i = 1;

  while (pass !== password) {
    i++;
    pass = input[i];
  }
  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
