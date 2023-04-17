import { updateNav } from './app.js';
import { showView } from './helpers.js';
import { showHome } from './home.js';

const section = document.getElementById('form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onRegister);
section.remove();

export function showRegister() {
  showView(section);
}

async function onRegister(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const rePass = formData.get('repeatPassword').trim();

  try {
    if (email == '' || password == '' || rePass == '') {
      throw new Error('All fields are required!');
    }

    if (password.length < 6) {
      throw new Error('Password must be atleast 6 characters !');
    }

    if (password != rePass) {
      throw new Error("Passwords don't match !");
    }

    const response = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok != true) {
      const err = await response.json();
      throw new Error(err.message);
    }

    const data = await response.json();

    sessionStorage.setItem(
      'userData',
      JSON.stringify({
        email: data.email,
        id: data._id,
        token: data.accessToken,
      })
    );

    form.reset();
    updateNav();
    showHome();
  } catch (error) {
    alert(error.message);
  }
}
