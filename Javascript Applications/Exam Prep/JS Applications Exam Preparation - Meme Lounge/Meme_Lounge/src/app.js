import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('Details page'));
page('/my-profile', () => console.log('My profile page'));
page('/edit/:id', () => console.log('Edit page'));
page('/create', () => console.log('Create page'));
page('/login', () => console.log('Login page'));
page('/register', () => console.log('Register page'));

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
