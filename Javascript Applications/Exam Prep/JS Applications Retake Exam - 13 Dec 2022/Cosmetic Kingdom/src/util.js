import { render } from './lib.js';

const root = document.querySelector('main');

export function getUserData() {
  return JSON.parse(localStorage.getItem('userData'));
}

export function setUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
  localStorage.removeItem('userData');
}

export function decorateCtx(ctx, next) {
  ctx.render = (content) => render(content, root);

  next();
}

export function updateUserNav() {
  const userData = getUserData();

  if (userData) {
    document.querySelector('.user').style.display = 'block';
    document.querySelector('.guest').style.display = 'none';
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'block';
  }
}
