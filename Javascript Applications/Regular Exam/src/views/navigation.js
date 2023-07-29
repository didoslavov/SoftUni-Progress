import { logout } from '../api/users.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const header = document.querySelector('header');

const navTemplate = (user) => html`<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

    <nav>
        <div>
            <a href="/catalog">Fun Facts</a>
        </div>
        ${user
            ? html`<div class="user">
                  <a href="/create">Add Fact</a>
                  <a @click=${onLogout} href="javascript:void(0)">Logout</a>
              </div>`
            : html`<div class="guest">
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
              </div>`}
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
