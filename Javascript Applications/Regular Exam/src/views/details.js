import { deleteItem, getById, getTotalLikes, like, userHasLiked } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (fact, isLogged, isOwner, onLike, hasLiked, totalLikes, onDelete) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${fact.imageUrl} alt="example1" />
        <p id="details-category">${fact.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${fact.description}</p>
                <p id="more-info">${fact.moreInfo}</p>
            </div>

            <h3>Likes:<span id="likes">${totalLikes}</span></h3>
            <div id="action-buttons">
                ${isOwner
                    ? html`<a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
                    : nothing}
                ${isLogged && !isOwner && !hasLiked
                    ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
                    : nothing}
            </div>
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const isLogged = ctx.user;
    const [fact, totalLikes, hasLiked] = await Promise.all([getById(id), getTotalLikes(id), userHasLiked(id, ctx.user?._id)]);
    const isOwner = ctx.user?._id == fact._ownerId;

    ctx.render(detailsTemplate(fact, isLogged, isOwner, onLike, hasLiked, totalLikes, onDelete));

    async function onLike() {
        await like(id);
        ctx.page.redirect('/details/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are u sure?');

        if (choice) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }
}
