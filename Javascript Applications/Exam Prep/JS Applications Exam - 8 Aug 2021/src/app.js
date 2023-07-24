import { page } from './lib.js';
import { render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showMyBooks } from './views/my-books.js';
import { updateNav } from './views/navigation.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('site-content');

page(decorateContext);
page('/', showCatalog);
page('/catalog', showCatalog);
page('/my-books', showMyBooks);
page('/create', () => console.log('Create page'));
page('/details/:id', () => console.log('Details page'));
page('/edit/:id', () => console.log('Edit page'));
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
