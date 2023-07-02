import { logout } from '../api/user.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    <nav>
        <div>
            <a href="/catalog">Fruits</a>
            <a href="/search">Search</a>
        </div>
        ${hasUser
            ? html`<div class="user">
                  <a class="user" href="/create">Add Fruit</a>
                  <a @click=${onLogout} href="javascript:void(0)">Logout</a>
              </div>`
            : html`<div class="guest">
                  <a class="guest" href="/login">Login</a>
                  <a class="guest" href="/register">Register</a>
              </div>`}
    </nav>`;

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav);
}

function onLogout() {
    logout();

    updateNav();
    page.redirect('/');
}
