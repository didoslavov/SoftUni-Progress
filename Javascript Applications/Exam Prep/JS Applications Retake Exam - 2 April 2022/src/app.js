import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/navigation.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', () => console.log('Catalog page'));
page('/catalog/:id', () => console.log('Details page'));
page('/edit/:id', () => console.log('Edit page'));
page('/create', () => console.log('Create page'));
page('/login', showLogin);
page('/register', () => console.log('Register page'));

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
