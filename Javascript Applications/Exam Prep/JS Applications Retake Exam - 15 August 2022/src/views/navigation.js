import { logout } from '../api/user.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.getElementById('header');

const navigationTemplate = (hasUser) => html`<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    <nav>
        <div>
            <a href="/catalog">Dashboard</a>
            <a href="/search">Search</a>
        </div>
        ${hasUser
            ? html`<div class="user">
                  <a href="/create">Add Pair</a>
                  <a @click=${onLogout} href="javascript:void(0)">Logout</a>
              </div>`
            : html`<div class="guest">
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
              </div>`}
    </nav>`;

export function updateUserNav() {
    const user = getUserData();

    render(navigationTemplate(user), nav);
}

async function onLogout() {
    await logout();

    updateUserNav();
    page.redirect('/');
}
