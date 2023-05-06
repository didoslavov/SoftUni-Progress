import { html } from '../../lib.js';
import { getUserData, updateUserNav } from '../../util.js';
import { deleteEvent, getEventById, getGoingCount, goToEvent } from '../api/data.js';

const detailsTemplate = (isOwner, isLoggedIn, event, onEdit, onDelete, onGoing, goingCount) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${event.imageUrl} />
    <p id="details-title">${event.name}</p>
    <p id="details-category">Category: <span id="categories">${event.category}</span></p>
    <p id="details-date">Date:<span id="date">${event.date}</span></p>
    <div id="info-wrapper">
      <div id="details-description">
        <span>${event.description}</span>
      </div>
    </div>
    <h3>Going: <span id="go">${goingCount}</span> times.</h3>
    <div id="action-buttons">
      ${isOwner
        ? html` <a @click=${onEdit} href="/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
        : null}
      <!--Bonus - Only for logged-in users ( not authors )-->
      ${isLoggedIn && !isOwner ? html`<a @click=${onGoing} href="" id="go-btn">Going</a>` : null}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const event = await loadEvent();
  const isOwner = getUserData()?.id == event._ownerId;
  const isLoggedIn = getUserData() != null;
  const goingCount = await getGoingCount(id);

  ctx.render(detailsTemplate(isOwner, isLoggedIn, event, onEdit, onDelete, onGoing, goingCount));
  updateUserNav();

  async function loadEvent() {
    return getEventById(id);
  }

  function onEdit(e) {
    e.preventDefault();
    ctx.page.redirect('/edit/' + id);
  }

  async function onDelete() {
    await deleteEvent(id);
    ctx.page.redirect('/catalog');
  }

  async function onGoing() {
    await goToEvent({ id });
    document.getElementById('go-btn').style.display = 'none';
  }
}
