import { page } from './lib.js';
import { render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMyBooks } from './views/my-books.js';
import { updateNav } from './views/navigation.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('site-content');

page(decorateContext);
page('/', showCatalog);
page('/catalog', showCatalog);
page('/my-books', showMyBooks);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/login', showLogin);
page('/register', showRegister);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}
