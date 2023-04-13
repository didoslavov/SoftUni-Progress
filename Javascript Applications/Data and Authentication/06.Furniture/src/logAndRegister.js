const urlUsers = "http://localhost:3030/users";

const formRegister = document.querySelector('form[action="/register"]');
const formLogin = document.querySelector('form[action="/login"]');

formRegister.addEventListener("submit", register);
formLogin.addEventListener("submit", login);

async function register(e) {
  e.preventDefault();

  const url = new URL(e.target.action);

  const dataForm = new FormData(e.target);

  const email = dataForm.get("email");
  const password = dataForm.get("password");
  const rePass = dataForm.get("rePass");

  if (email == "" || password == "" || rePass == "" || password !== rePass) {
    return alert("Incorrect data. Try again!");
  }

  await request(url.pathname, email, password);

  window.location.href = "homeLogged.html";
}

async function login(e) {
  e.preventDefault();

  const url = new URL(e.target.action);

  const dataForm = new FormData(e.target);

  const email = dataForm.get("email");
  const password = dataForm.get("password");

  if (email == "" || password == "") {
    return alert("Incorrect data. Try again!");
  }

  await request(url.pathname, email, password);

  window.location.href = "homeLogged.html";
}

async function request(path, email, password) {
  try {
    const response = await fetch(`${urlUsers}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.status !== 200) {
      throw new Error("incorrect data!");
    }

    const user = await response.json();

    sessionStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    alert(err.message);
  }
}