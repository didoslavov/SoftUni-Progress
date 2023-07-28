import { page } from './lib.js';
import { render } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { updateNav } from './views/navigation.js';

const main = document.getElementById('site-content');

page(decorateContext);
page('/', showHome);
page('/catalog', () => console.log('Catalog Page'));
page('/my-listings', () => console.log('My listings Page'));
page('/create', () => console.log('Create Page'));
page('/details/:id', () => console.log('Details Page'));
page('/edit/:id', () => console.log('Edit Page'));
page('/search', () => console.log('Search Page'));
page('/login', () => console.log('Login Page'));
page('/register', () => console.log('Register Page'));

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
