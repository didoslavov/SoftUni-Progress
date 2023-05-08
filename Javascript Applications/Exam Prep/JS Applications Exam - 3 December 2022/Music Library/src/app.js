import { logout } from './api/data.js';
import { page } from './lib.js';
import { decorateContext, updateUserNav } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);

page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
  await logout();
  updateUserNav();
  page.redirect('/');
});
