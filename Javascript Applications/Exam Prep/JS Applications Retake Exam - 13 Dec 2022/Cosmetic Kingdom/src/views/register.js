import { register } from '../api/data.js';
import { html } from '../lib.js';
import { updateUserNav } from '../util.js';

const registerTemplate = (onSubmit) => html` <section id="register">
  <div class="form">
    <h2>Register</h2>
    <form @submit=${onSubmit} class="register-form">
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input type="password" name="password" id="register-password" placeholder="password" />
      <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const email = formData.get('email');
      const password = formData.get('password');
      const repass = formData.get('re-password');

      if (email == '' || password == '') {
        throw new Error('All fields are required!');
      }

      if (password != repass) {
        throw new Error("Passwords don't match!");
      }

      await register(email, password);
      updateUserNav();
      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  }
}