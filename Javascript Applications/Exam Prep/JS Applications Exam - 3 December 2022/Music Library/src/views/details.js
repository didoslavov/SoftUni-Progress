import { deleteEvent, getAlbumById, getAlbumLikes, likeAlbum } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData, updateUserNav } from '../util.js';

const detailsTemplate = (isOwner, showLikeBtn, album, likes, onLike, onDelete, onEdit) => html` <section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src=${album.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
      <p><strong>Album name:</strong><span id="details-album">${album.album}</span></p>
      <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
    <div id="action-buttons">
      ${isOwner
        ? html`<a href=${`/edit/${album._id}`} id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a> `
        : null}
      ${showLikeBtn ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : null}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;

  const album = await loadAlbum();
  const likes = await getAlbumLikes(id);

  const userData = getUserData();
  const isOwner = userData && userData.id == album._ownerId;
  const showLikeBtn = userData && !isOwner;

  ctx.render(detailsTemplate(isOwner, showLikeBtn, album, likes, onLike, onDelete));
  updateUserNav();

  async function loadAlbum() {
    return await getAlbumById(id);
  }

  async function onLike() {
    await likeAlbum({ id });
    document.getElementById('like-btn').style.display = 'none';
    ctx.page.redirect('/details/' + id);
  }

  async function onDelete() {
    await deleteEvent(id);
    ctx.page.redirect('/catalog');
  }
}
