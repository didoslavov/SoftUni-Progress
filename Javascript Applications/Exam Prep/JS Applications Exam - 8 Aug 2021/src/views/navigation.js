import { logout } from '../api/users.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const header = document.getElementById('site-header');

const navTemplate = (user) => html`<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/catalog">Dashboard</a>
        ${user
            ? html`<div id="user">
                  <span>Welcome, ${user.email}</span>
                  <a class="button" href="/my-books">My Books</a>
                  <a class="button" href="/create">Add Book</a>
                  <a @click=${onLogout} class="button" href="javascript:void(0)">Logout</a>
              </div>`
            : html` <div id="guest">
                  <a class="button" href="/login">Login</a>
                  <a class="button" href="/register">Register</a>
              </div>`}
    </section>
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
