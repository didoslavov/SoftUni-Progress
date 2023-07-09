import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

const navTemplate = (user) => html`<nav>
    <a href="/catalog">All Memes</a>
    ${user
        ? html`<div class="user">
              <a href="/create">Create Meme</a>
              <div class="profile">
                  <span>Welcome, ${user.email}</span>
                  <a href="/my-profile">My Profile</a>
                  <a href="javascript:void(0)">Logout</a>
              </div>
          </div>`
        : html`<div class="guest">
              <div class="profile">
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
              </div>
              <a class="active" href="/">Home Page</a>
          </div>`}
</nav>`;

export function updateUserNav() {
    const user = getUserData();
    render(navTemplate(user), nav);
}
