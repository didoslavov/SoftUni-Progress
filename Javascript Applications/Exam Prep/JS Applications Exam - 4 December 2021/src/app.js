import { page } from './lib.js';
import { render } from './lib.js';
import { getUserData } from './util.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/navigation.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('main-content');

page(decorateContext);
page('/', () => console.log('Home Page'));
page('/catalog', () => console.log('Catalog Page'));
page('/create', () => console.log('Create Page'));
page('/details/:id', () => console.log('Details Page'));
page('/edit/:id', () => console.log('Edit Page'));
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
