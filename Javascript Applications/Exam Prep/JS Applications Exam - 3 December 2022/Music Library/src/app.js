import { logout } from './api/data.js';
import { page } from './lib.js';
import { decorateContext, updateUserNav } from './util.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page(decorateContext);
page('/', () => console.log('home Page'));
page('/catalog', () => console.log('Catalog Page'));
page('/create', () => console.log('Create Page'));
page('/details/:id', () => console.log('Details Page'));
page('/login', loginPage);
page('/register', registerPage);

page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
  await logout();
  updateUserNav();
  page.redirect('/');
});
