import { login } from '../api/data.js';
import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Login User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input class="form-control" id="password" type="password" name="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </div>
    </div>
  </form>`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);
    e.target.reset();
    ctx.page.redirect('/');
  }
}
