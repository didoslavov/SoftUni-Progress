import { render, page, html } from '../lib.js';
import { logout } from '../api/user.js';
import { getUserData } from '../util.js';

const header = document.querySelector('header');

const navigationTemplate = (hasUser) => html` <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>
    <nav>
        <div>
            <a href="#">Dashboard</a>
        </div>
        ${hasUser
            ? html`<div class="user">
                  <a href="/create">Create Offer</a>
                  <a @click=${onLogout} href="javascript:void(0)">Logout</a>
              </div>`
            : html`<div class="guest">
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
              </div>`}
    </nav>`;

export function updateNav() {
    const user = getUserData();

    render(navigationTemplate(user), header);
}

function onLogout() {
    logout();

    updateNav();
    page.redirect('/catalog');
}
