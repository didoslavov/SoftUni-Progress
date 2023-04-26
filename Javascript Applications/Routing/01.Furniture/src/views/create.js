import { createFurniture } from '../api/data.js';
import { html, render } from '../lib.js';

const furnitureTemplate = (onSubmit, errorMsg) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Create New Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input class="form-control valid" id="new-make" type="text" name="make" />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input class="form-control" id="new-model" type="text" name="model" />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input class="form-control" id="new-year" type="number" name="year" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description">Description</label>
          <input class="form-control" id="new-description" type="text" name="description" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input class="form-control" id="new-price" type="number" name="price" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input class="form-control" id="new-image" type="text" name="img" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material">Material (optional)</label>
          <input class="form-control" id="new-material" type="text" name="material" />
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
      </div>
    </div>
  </form>
  ${errorMsg ? html`<div class="error">${errorMsg}</div>` : null}`;

export function createPage(ctx) {
  update();

  function update(errorMsg) {
    ctx.render(furnitureTemplate(onSubmit, errorMsg));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);

    try {
      if (make.lenght < 4) {
        throw new Error('Make and Model must be at least 4 symbols long!');
      }
      if (model.length < 4) {
        throw new Error('Make and Model must be at least 4 symbols long!');
      }
      if (year < 1950 && year > 2050) {
        throw new Error('Year must be between 1950 and 2050!');
      }
      if (description.length <= 10) {
        throw new Error('Description must be more then 10 symbols long!');
      }
      if (price < 0) {
        throw new Error('Price must be a positive number!');
      }
      if (img.length < 0) {
        throw new Error('Image URL is required!');
      }

      const data = { make, model, year, description, price, img, material };

      await createFurniture(data);
      e.target.reset();
      ctx.page.redirect('/');
    } catch (error) {
      update(error.message);
    }
  }
}
