import { html } from '../../lib.js';
import { updateUserNav } from '../../util.js';
import { createEvent } from '../api/data.js';

const createTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Event</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="name" id="name" placeholder="Event" />
      <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
      <input type="text" name="category" id="event-category" placeholder="Category" />

      <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

      <input type="text" name="date" id="date" placeholder="When?" />

      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl');
    const category = formData.get('category');
    const description = formData.get('description');
    const date = formData.get('date');

    try {
      if (name == '' || imageUrl == '' || category == '' || description == '' || date == '') {
        throw new Error('All fields are required');
      }

      await createEvent({ name, imageUrl, category, description, date });
      ctx.page.redirect('/catalog');
      updateUserNav();
    } catch (error) {
      alert(error.message);
    }
  }
}
