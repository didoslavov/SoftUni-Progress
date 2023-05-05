import { html } from '../../lib.js';
import { getUserData, updateUserNav } from '../../util.js';
import { getEventById } from '../api/data.js';

const detailsTemplate = (isOwner, isLoggedIn, event) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${event.imageUrl} />
    <p id="details-title">${event.name}</p>
    <p id="details-category">Category: <span id="categories">${event.category}</span></p>
    <p id="details-date">Date:<span id="date">${event.date}</span></p>
    <div id="info-wrapper">
      <div id="details-description">
        <span> ${event.description}</span>
      </div>
    </div>

    <h3>Going: <span id="go">0</span> times.</h3>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${isOwner
        ? html` <a href="" id="edit-btn">Edit</a>
            <a href="" id="delete-btn">Delete</a>`
        : null}

      <!--Bonus - Only for logged-in users ( not authors )-->
      ${isLoggedIn && !isOwner ? html`<a href="" id="go-btn">Going</a>` : null}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const event = await loadEvent();
  const isOwner = getUserData()?.id == event._ownerId;
  const isLoggedIn = getUserData() != null;

  ctx.render(detailsTemplate(isOwner, isLoggedIn, event));
  updateUserNav();

  async function loadEvent() {
    return getEventById(ctx.params.id);
  }
}
