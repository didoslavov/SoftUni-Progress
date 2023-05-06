import { html } from '../../lib.js';
import { editEvent, getEventById } from '../api/data.js';

const editTemplate = (onSubmit, event) => html` <section id="edit">
  <div class="form">
    <h2>Edit Event</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="name" id="name" placeholder="Event" .value=${event.name} />
      <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" .value=${event.imageUrl} />
      <input type="text" name="category" id="event-category" placeholder="Category" .value=${event.category} />

      <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value=${event.description}></textarea>

      <label for="date-and-time">Event Time:</label>
      <input type="text" name="date" id="date" placeholder="When?" .value=${event.date} />

      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const event = await getEventById(ctx.params.id);

  ctx.render(editTemplate(onSubmit, event));

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

      await editEvent({ name, imageUrl, category, description, date }, ctx.params.id);
      ctx.page.redirect('/details/' + ctx.params.id);
    } catch (error) {
      alert(error.message);
    }
  }
}
