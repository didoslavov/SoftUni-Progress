import { render } from './lib.js';

const root = document.querySelector('main');

export function clearUserData() {
  localStorage.clear();
}

export function setUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
  return JSON.parse(localStorage.getItem('userData'));
}

export function createOptions(method = 'get', data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers['Content-Type'] = 'applications/json';
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();

  if (userData != null) {
    options.headers['X-Authorization'] = userData.token;
  }

  return options;
}

export function updateUserNav() {
  const userData = getUserData();

  if (userData) {
    document.querySelector('.user').style.display = 'inline';
    document.querySelector('.guest').style.display = 'none';
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'inline';
  }
}

export function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);

  next();
}
