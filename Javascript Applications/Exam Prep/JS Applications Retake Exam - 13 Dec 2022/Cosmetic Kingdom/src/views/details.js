import { deleteProduct, getProductById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (product, isOwner, onDelete) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-title">${product.name}</p>
    <p id="details-category">Category: <span id="categories">${product.category}</span></p>
    <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Bought: <span id="buys">0</span> times.</h4>
        <span>${product.description}</span>
      </div>
    </div>

    <!--Edit and Delete are only for creator-->
    ${isOwner
      ? html`<div id="action-buttons">
          <a href="/edit/${product._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`
      : null}
  </div>
</section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const product = await getProductById(id);

  const userId = getUserData().id;
  const isOwner = userId == product._ownerId;
  ctx.render(detailsTemplate(product, isOwner, onDelete));

  async function onDelete() {
    deleteProduct(id);
    ctx.page.redirect('/catalog');
  }
}

/* 
      <!--Bonus - Only for logged-in users ( not authors )-->
      <a href="" id="buy-btn">Buy</a>
*/
