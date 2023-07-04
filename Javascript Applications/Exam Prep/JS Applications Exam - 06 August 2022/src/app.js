import { page, render } from './lib.js';
import { getUserData } from './util.js';

const main = document.querySelector('main');

page('/', () => console.log('Home View'));
page('/catalog', () => console.log('Catalog View'));
page('/catalog/:id', () => console.log('Details View'));
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
