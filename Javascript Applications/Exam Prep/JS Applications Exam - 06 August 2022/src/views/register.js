import { register } from '../api/user.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { updateNav } from './navigation.js';

const registerTemplate = (onRegister) => html`<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/register">Login</a></p>
        </form>
    </div>
</section>`;

export function showRegister(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({ email, password, 're-password': rePass }) {
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        if (password != rePass) {
            return alert("Passwords don't match!");
        }

        await register(email, password);

        updateNav();
        ctx.page.redirect('/catalog');
    }
}
