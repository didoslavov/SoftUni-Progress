import { login } from '../api/api.js';

const section = document.getElementById('loginPage');
section.remove();
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
let ctx = null;

export async function showLoginPage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  await login(email, password);
  form.reset();
  ctx.goTo('home');
  ctx.updateNav();
}
