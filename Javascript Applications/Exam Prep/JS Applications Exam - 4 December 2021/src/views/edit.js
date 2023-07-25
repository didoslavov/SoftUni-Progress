import { edit, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (album, onSubmit) => html`<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value="In These Silent Days" .value=${album.name} />

                <label for="imgUrl" class="vhide">Image Url</label>
                <input
                    id="imgUrl"
                    name="imgUrl"
                    class="imgUrl"
                    type="text"
                    value="./img/BrandiCarlile.png"
                    .value=${album.imgUrl} />

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value="12.80" .value=${album.price} />

                <label for="releaseDate" class="vhide">Release date</label>
                <input
                    id="releaseDate"
                    name="releaseDate"
                    class="releaseDate"
                    type="text"
                    value="October 1, 2021"
                    .value=${album.releaseDate} />

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value="Brandi Carlile" .value=${album.artist} />

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value="Low Country Sound Music" .value=${album.genre} />

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10" .value=${album.description}></textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);

    ctx.render(editTemplate(album, createSubmitHandler(onSubmit)));

    async function onSubmit({ name, imgUrl, price, releaseDate, artist, genre, description }) {
        if ([name, imgUrl, price, releaseDate, artist, genre, description].some((x) => x == '')) {
            return alert('All fields are required!');
        }

        await edit(id, { name, imgUrl, price, releaseDate, artist, genre, description });
        ctx.page.redirect('/details/' + id);
    }
}
