import { createAlbum, editAlbum, getAlbumById } from '../api/data.js';
import { html } from '../lib.js';
import { updateUserNav } from '../util.js';

const editTemplate = (onSubmit, album) => html`<section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} />
      <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
      <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
      <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release} />
      <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label} />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales} />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const album = await getAlbumById(ctx.params.id);
  ctx.render(editTemplate(onSubmit, album));
  updateUserNav();

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(formData);

    try {
      if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
        throw new Error('All fiields are required !');
      }

      await editAlbum(ctx.params.id, { singer, album, imageUrl, release, label, sales });
      ctx.page.redirect('/details/' + ctx.params.id);
    } catch (error) {
      alert(error.message);
    }
  }
}
