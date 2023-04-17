import { addCreateBtn, hideCreateButton, showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';

const views = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};

const nav = document.querySelector('nav');
nav.querySelector('#logoutBtn').addEventListener('click', onLogout);
nav.addEventListener('click', e => {
  const view = views[e.target.id];

  if (typeof view == 'function') {
    e.preventDefault();
    view();
  }
});

updateNav();
//init app in home view
showHome();

export function updateNav() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if (userData != null) {
    addCreateBtn();
    nav.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.email}`;
    [...nav.querySelectorAll('.user')].forEach(
      e => (e.style.display = 'block')
    );
    [...nav.querySelectorAll('.guest')].forEach(
      e => (e.style.display = 'none')
    );
  } else {
    hideCreateButton();
    [...nav.querySelectorAll('.guest')].forEach(
      e => (e.style.display = 'block')
    );
    [...nav.querySelectorAll('.user')].forEach(e => (e.style.display = 'none'));
  }
}

async function onLogout(e) {
  e.preventDefault();
  e.stopImmediatePropagation();

  const { token } = JSON.parse(sessionStorage.getItem('userData'));

  await fetch('http://localhost:3030/users/logout', {
    headers: { 'X-Authorization': token },
  });

  sessionStorage.removeItem('userData');
  updateNav();
  showLogin();
}
