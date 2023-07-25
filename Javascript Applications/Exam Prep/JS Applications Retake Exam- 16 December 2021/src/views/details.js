import { deleteTheater, getAllLikes, getById, like, userHasLiked } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (theater, onDelete, totalLikes, onLike, hasLiked, isLogged, isOwner) => html`<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theater.title}</h1>
            <div>
                <img src=${theater.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theater.description}</p>
            <h4>Date: ${theater.date}</h4>
            <h4>Author: ${theater.author}</h4>
            <div class="buttons">
                ${isOwner
                    ? html`<a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                          <a class="btn-edit" href="/edit/${theater._id}">Edit</a>`
                    : nothing}
                ${!isOwner && !hasLiked && isLogged
                    ? html`<a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>`
                    : nothing}
            </div>
            <p class="likes">Likes: ${totalLikes}</p>
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const theaterId = ctx.params.id;
    const [theater, totalLikes, hasLiked] = await Promise.all([
        getById(theaterId),
        getAllLikes(theaterId),
        userHasLiked(theaterId, ctx.user?._id),
    ]);
    const isLogged = ctx.user != undefined;
    const isOwner = theater._ownerId == ctx.user?._id;

    ctx.render(detailsTemplate(theater, onDelete, totalLikes, onLike, hasLiked, isLogged, isOwner));

    async function onLike() {
        like({ theaterId });
        ctx.page.redirect('/details/' + theaterId);
    }

    async function onDelete() {
        const choice = confirm('Are u sure?');

        if (choice) {
            await deleteTheater(theaterId);
            ctx.page.redirect('/');
        }
    }
}
