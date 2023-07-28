import { logout } from '../api/users.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

const header = document.querySelector('header');

const navTemplate = (user) => html`<nav>
    <a class="active" href="/">Home</a>
    <a href="/catalog">All Listings</a>
    <a href="/search">By Year</a>
    ${user
        ? html`<div id="profile">
              <a>Welcome ${user.username}</a>
              <a href="/my-listings">My Listings</a>
              <a href="/create">Create Listing</a>
              <a @click=${onLogout} href="javascript:void(0)">Logout</a>
          </div>`
        : html`<div id="guest">
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
