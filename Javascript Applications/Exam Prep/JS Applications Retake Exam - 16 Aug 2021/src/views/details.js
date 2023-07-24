import { createComment, getById, getTotalComments } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const detailsTemplate = (game, isOwner, isLogged, comments, onSubmit) => html`<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>
        <div class="details-comments">
            ${html`<h2>Comments:</h2>
                ${comments.length > 0
                    ? html`<ul>
                          ${comments.map(commentTemplate)}
                      </ul>`
                    : html`<p class="no-comment">No comments.</p>`}`}
        </div>
        ${isOwner
            ? html`<div class="buttons">
                  <a href="/edit/${game._id}" class="button">Edit</a>
                  <a href="javascript:void(0)" class="button">Delete</a>
              </div>`
            : nothing}
    </div>
    ${isLogged && !isOwner
        ? html`<article class="create-comment">
              <label>Add new comment:</label>
              <form @submit=${onSubmit} class="form">
                  <textarea name="comment" placeholder="Comment......"></textarea>
                  <input class="btn submit" type="submit" value="Add Comment" />
              </form>
          </article>`
        : nothing}
</section>`;

const commentTemplate = (comment) => html`<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const [game, comments] = await Promise.all([await getById(id), await getTotalComments(id)]);
    const user = ctx.user != undefined;
    const isOwner = ctx.user?._id == game._ownerId;

    ctx.render(detailsTemplate(game, isOwner, user, comments, createSubmitHandler(onSubmitComment)));

    async function onSubmitComment({ comment }) {
        await createComment({ gameId: id, comment });
        ctx.page.redirect(`/details/${game._id}`);
    }
}
