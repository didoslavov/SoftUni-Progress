import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const root = document.querySelector('div.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

updateUserNav();

page(decorateCtx);
page('/', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-furniture', catalogPage);

page.start();

function updateUserNav() {
  const userData = getUserData();

  if (userData) {
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'inline-block';
  }
}

function decorateCtx(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;

  next();
}

async function onLogout() {
  await logout();
  updateUserNav();
  page.redirect('/');
}
