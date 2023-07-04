import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';

const main = document.querySelector('main');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', () => console.log('Edi View'));
page('/create', () => console.log('Create View'));
page('/login', () => console.log('Login View'));
page('/register', () => console.log('Register View'));

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
