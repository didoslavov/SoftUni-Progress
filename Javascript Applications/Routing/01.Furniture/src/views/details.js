import { getFurnitureById } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (dataPromise) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
  </div>`;

const furnitureTemplate = (furniture, userId) => html`<div class="row space-top">
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
      ${userId == furniture._ownerId ? html`<a href="/edit" class="btn btn-info">Edit</a> <a href="/delete" class="btn btn-red">Delete</a>` : null}
    </div>
  </div>
</div>`;

export function detailsPage(ctx) {
  const id = ctx.params.id;
  ctx.render(detailsTemplate(loadFurniture(id)));
}

async function loadFurniture(id) {
  const userId = getUserData().id;
  const furniture = await getFurnitureById(id);

  return furnitureTemplate(furniture, userId);
}
