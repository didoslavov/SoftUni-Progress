import { editGame, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (game, onSubmit) => html`<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">
            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="" .value=${game.title} />

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="" .value=${game.category} />

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="" .value=${game.maxLevel} />

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="" .value=${game.imageUrl} />

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game" />
        </div>
    </form>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const game = await getById(id);

    console.log(game);
    ctx.render(editTemplate(game, createSubmitHandler(onSubmit)));

    async function onSubmit({ title, category, maxLevel, imageUrl, summary }) {
        if ([title, category, maxLevel, imageUrl, summary].some((x) => x == '')) {
            return alert('All fields are required!');
        }

        await editGame(id, { title, category, maxLevel, imageUrl, summary });
        ctx.page.redirect('/details/' + id);
    }
}
