import { buyProduct, deleteProduct, getBoughtProductsByUserId, getProductById, getTotalBoughtProducts } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (product, isOwner, onDelete, isLoggedIn, onBuyProduct, counter) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-title">${product.name}</p>
    <p id="details-category">Category: <span id="categories">${product.category}</span></p>
    <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Bought: <span id="buys">${counter}</span> times.</h4>
        <span>${product.description}</span>
      </div>
    </div>
    ${isOwner
      ? html`<div id="action-buttons">
          <a href="/edit/${product._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`
      : null}
    ${isLoggedIn ? html`<a @click=${onBuyProduct} href="" id="buy-btn">Buy</a>` : null}
  </div>
</section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const product = await getProductById(id);

  const userData = getUserData();
  let userId;
  let isLoggedIn = true;
  let counter = 0;

  if (userData != null) {
    userId = userData.id;
  } else {
    isLoggedIn = false;
  }
  const isOwner = userId == product._ownerId;
  ctx.render(detailsTemplate(product, isOwner, onDelete, isLoggedIn, onBuyProduct, counter));

  async function onDelete() {
    await deleteProduct(id);
    ctx.page.redirect('/catalog');
  }

  async function onBuyProduct() {
    await buyProduct({ id });
    const counter = await getTotalBoughtProducts({ userId, id });
    console.log(counter);
    document.getElementById('buy-btn').style.display = 'none';
  }
}

/* 

      getTotalBoughtProducts({ id }),
      getBoughtProductsByUserId({ userId }),
*/
