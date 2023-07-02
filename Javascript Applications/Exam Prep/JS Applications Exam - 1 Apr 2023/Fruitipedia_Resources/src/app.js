import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { updateNav } from './views/navigation.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

const main = document.getElementById('main');
// document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView);
page('/catalog', catalogView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/search', searchView);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}
