import { login } from '../api/users.js';
import { html } from '../lib.js';
import { createSubmitHandler, notify } from '../util.js';
import { updateUserNav } from './navigation.js';

const loginTemplate = (onLogin) => html`<section id="login">
    <form @submit=${onLogin} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text" />
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password" />
            <input type="submit" class="registerbtn button" value="Login" />
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {
        if (email == '' || password == '') {
            return notify('All fields are requiered!');
        }

        await login(email, password);
        updateUserNav();
        ctx.page.redirect('/catalog');
    }
}
