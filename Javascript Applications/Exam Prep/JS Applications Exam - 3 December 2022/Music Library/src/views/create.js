import { createAlbum } from '../api/data.js';
import { html } from '../lib.js';
import { updateUserNav } from '../util.js';

const createTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
      <input type="text" name="album" id="album-album" placeholder="Album" />
      <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
      <input type="text" name="release" id="album-release" placeholder="Release date" />
      <input type="text" name="label" id="album-label" placeholder="Label" />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));
  updateUserNav();

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);

    try {
      if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
        throw new Error('All fiields are required !');
      }

      await createAlbum({ singer, album, imageUrl, release, label, sales });
      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  }
}
