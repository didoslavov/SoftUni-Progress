import { deleteFurniture, getFurnitureById } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (dataPromise) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
  </div>`;

const furnitureTemplate = (furniture, isOwner, onDelete) => html`<div class="row space-top">
  <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src=${furniture.img} />
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <p>Make: <span>${furniture.make}</span></p>
    <p>Model: <span>${furniture.model}</span></p>
    <p>Year: <span>${furniture.year}</span></p>
    <p>Description: <span>${furniture.description}</span></p>
    <p>Price: <span>${furniture.price}</span></p>
    <p>Material: <span>${furniture.material}</span></p>
    <div>
      ${isOwner
        ? html`<a href=${`/edit/${furniture._id}`} class="btn btn-info">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>`
        : null}
    </div>
  </div>
</div>`;

export function detailsPage(ctx) {
  const id = ctx.params.id;
  ctx.render(detailsTemplate(loadFurniture(id, onDelete)));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this furniture?');

    if (choice) {
      await deleteFurniture(id);
      ctx.page.redirect('/');
    }
  }
}

async function loadFurniture(id, onDelete) {
  const furniture = await getFurnitureById(id);

  const userId = getUserData().id;
  const isOwner = userId == furniture._ownerId;

  return furnitureTemplate(furniture, isOwner, onDelete);
}
