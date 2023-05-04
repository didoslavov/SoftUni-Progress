import { editProduct, getProductById } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (product, onSubmit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Product</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input type="text" name="name" id="name" placeholder="Product Name" .value=${product.name} />
      <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" .value=${product.imageUrl} />
      <input type="text" name="category" id="product-category" placeholder="Category" .value=${product.category} />
      <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value=${product.description}></textarea>

      <input type="text" name="price" id="product-price" placeholder="Price" .value=${product.price} />
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const product = await getProductById(id);

  ctx.render(editTemplate(product, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const { name, imageUrl, category, description, price } = Object.fromEntries(new FormData(e.target));

    const isEmptyField = name == '' || imageUrl == '' || category == '' || description == '' || price == '';

    try {
      if (isEmptyField) {
        throw new Error('All fields are required!');
      }

      const res = await editProduct({ name, imageUrl, category, description, price }, id);
      ctx.page.redirect('/details/' + id);
    } catch (error) {
      alert(error.message);
    }
  }
}
