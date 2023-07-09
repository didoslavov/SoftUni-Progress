import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showMyMemes } from './views/my-memes.js';
import { updateUserNav } from './views/navigation.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/my-profile', showMyMemes);
page('/edit/:id', () => console.log('Edit page'));
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

updateUserNav();
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
