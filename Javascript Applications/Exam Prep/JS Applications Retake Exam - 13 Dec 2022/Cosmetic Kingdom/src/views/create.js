import { addProduct } from '../api/data.js';
import { html } from '../lib.js';

const createProductTemplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <h2>Add Product</h2>
    <form @submit=${onSubmit} class="create-form">
      <input type="text" name="name" id="name" placeholder="Product Name" />
      <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
      <input type="text" name="category" id="product-category" placeholder="Category" />
      <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

      <input type="text" name="price" id="product-price" placeholder="Price" />

      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export function createPage(ctx) {
  ctx.render(createProductTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const { name, imageUrl, category, description, price } = Object.fromEntries(new FormData(e.target));

    const isEmptyField = name == '' || imageUrl == '' || category == '' || description == '' || price == '';

    try {
      if (isEmptyField) {
        throw new Error('All fields are required!');
      }

      const res = await addProduct({ name, imageUrl, category, description, price });

      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  }
}
