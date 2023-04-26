import { getAllFurniture, getMyFurnitures } from '../api/data.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const catalogTemplate = (dataPromise, userpage) => html` <div class="row space-top">
    <div class="col-md-12">
      ${userpage
        ? html`<h1>My Furniture</h1>
            <p>This is a list of your publications.</p>`
        : html`<h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>`}
    </div>
  </div>
  <div class="row space-top">${until(dataPromise, html`<p>Loading &hellip;</p>`)}</div>`;

const furnitureTemplate = (furniture) => html` <div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src="${furniture.img}" />
      <p>${furniture.description}</p>
      <footer>
        <p>Price: <span>${furniture.price} $</span></p>
      </footer>
      <div>
        <a href=${`/details/${furniture._id}`} class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;

export function catalogPage(ctx) {
  const userpage = ctx.pathname == '/my-furniture';

  ctx.render(catalogTemplate(loadFurnitures(userpage), userpage));
}

async function loadFurnitures(userpage) {
  let furnitures = [];
  if (userpage) {
    const userId = getUserData().id;
    furnitures = await getMyFurnitures(userId);
  } else {
    furnitures = await getAllFurniture();
  }

  return furnitures.map(furnitureTemplate);
}
