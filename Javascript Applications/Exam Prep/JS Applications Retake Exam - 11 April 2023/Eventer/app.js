import { page } from './lib.js';
import { logout } from './src/api/data.js';
import { homePage } from './src/views/home.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { decorateCtx, updateUserNav } from './util.js';

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);
page('/', homePage);
page('/catalog', () => console.log('catalog'));
page('/create', () => console.log('create'));
page('/login', loginPage);
page('/register', registerPage);

page.start();

async function onLogout() {
  await logout();
  updateUserNav();
  page.redirect('/');
}
