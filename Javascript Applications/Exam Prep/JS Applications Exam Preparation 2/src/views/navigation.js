import { logout } from '../api/users.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const header = document.querySelector('header');

const navTemplate = (user) => html` <nav>
    <img src="./images/headphones.png" />
    <a href="/">Home</a>
    <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${user
            ? html`<li><a href="/create">Create Album</a></li>
                  <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`
            : html`<li><a href="/login">Login</a></li>
                  <li><a href="/register">Register</a></li>`}
    </ul>
</nav>`;

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), header);
}

async function onLogout() {
    await logout();

    updateNav();
    page.redirect('/');
}
