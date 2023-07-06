import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';

const main = document.getElementById('main-content');

page(decorateContext);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('Details Page'));
page('/my-posts', () => console.log('My Posts Page'));
page('/edit/:id', () => console.log('Edit Page'));
page('/create', () => console.log('Create Page'));
page('/login', () => console.log('Login Page'));
page('/register', () => console.log('Register Page'));

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
