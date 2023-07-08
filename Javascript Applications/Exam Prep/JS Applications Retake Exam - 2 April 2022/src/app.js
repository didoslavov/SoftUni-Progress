import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { updateNav } from './views/navigation.js';

const main = document.getElementById('main-content');

page(decorateContext);
page('/', showCatalog);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/my-posts', showMyPosts);
page('/edit/:id', showEdit);
page('/create', showCreate);
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
