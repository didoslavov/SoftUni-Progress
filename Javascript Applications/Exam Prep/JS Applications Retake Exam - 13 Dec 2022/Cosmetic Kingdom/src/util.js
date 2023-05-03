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
