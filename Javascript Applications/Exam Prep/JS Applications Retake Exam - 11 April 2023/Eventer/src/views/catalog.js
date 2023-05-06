import { html } from '../../lib.js';
import { updateUserNav } from '../../util.js';
import { getAllEvents } from '../api/data.js';

const catalogTemplate = (events) => html` <h2>Current Events</h2>
  ${events.length > 0 ? html`<section id="dashboard">${events.map(eventTemplate)}</section>` : html`<h4>No Events yet.</h4>`}`;

const eventTemplate = (event) => html`<div class="event">
  <img src=${event.imageUrl} />
  <p class="title">${event.name}</p>
  <p class="date">${event.date}</p>
  <a class="details-btn" href=${`/details/${event._id}`}>Details</a>
</div>`;

export async function catalogPage(ctx) {
  ctx.render(catalogTemplate(await loadEvents()));
  updateUserNav();

  async function loadEvents() {
    return await getAllEvents();
  }
}
