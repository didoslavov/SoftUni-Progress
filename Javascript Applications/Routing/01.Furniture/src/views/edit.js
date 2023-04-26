import { editFurniture, getFurnitureById } from '../api/data.js';
import { html, until } from '../lib.js';

const editTemplate = (furniturePromise) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
    ${until(furniturePromise, html`<p>Loading &hellip;</p>`)}
  </div>
`;
const formTemplate = (furniture, onSubmit) => html` <form @submit=${onSubmit}>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="form-group">
        <label class="form-control-label" for="new-make">Make</label>
        <input class="form-control" id="new-make" type="text" name="make" value=${furniture.make} />
      </div>
      <div class="form-group has-success">
        <label class="form-control-label" for="new-model">Model</label>
        <input class="form-control" id="new-model" type="text" name="model" value=${furniture.model} />
      </div>
      <div class="form-group has-danger">
        <label class="form-control-label" for="new-year">Year</label>
        <input class="form-control" id="new-year" type="number" name="year" value=${furniture.year} />
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-description">Description</label>
        <input class="form-control" id="new-description" type="text" name="description" value=${furniture.description} />
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
        <label class="form-control-label" for="new-price">Price</label>
        <input class="form-control" id="new-price" type="number" name="price" value=${furniture.price} />
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-image">Image</label>
        <input class="form-control" id="new-image" type="text" name="img" value=${furniture.img} />
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-material">Material (optional)</label>
        <input class="form-control" id="new-material" type="text" name="material" value=${furniture.material} />
      </div>
      <input type="submit" class="btn btn-info" value="Edit" />
    </div>
  </div>
</form>`;

export function editPage(ctx) {
  ctx.render(editTemplate(loadFurniture(ctx.params.id)));
}

async function loadFurniture(id) {
  const furniture = await getFurnitureById(id);

  return formTemplate(furniture, onSubmit);

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

      await editFurniture(data);
      e.target.reset();
      ctx.page.redirect('/');
    } catch (error) {
      update(error.message);
    }
  }
}
