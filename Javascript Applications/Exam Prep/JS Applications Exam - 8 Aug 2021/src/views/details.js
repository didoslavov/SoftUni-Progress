import { deleteBook, getAllLikes, getById, like, userHasLiked } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (book, isOwner, isLogged, totalLikes, onLike, hasLiked, onDelete) => html`<section
    id="details-page"
    class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl} /></p>
        <div class="actions">
            ${isOwner
                ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                      <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
                : nothing}
            ${!isOwner && !hasLiked && isLogged
                ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
                : nothing}

            <div class="likes">
                <img class="hearts" src="/images/heart.png" />
                <span id="total-likes">Likes: ${totalLikes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section> `;

export async function showDetails(ctx) {
    const bookId = ctx.params.id;

    const [book, totalLikes, hasLiked] = await Promise.all([
        getById(bookId),
        getAllLikes(bookId),
        ctx.user != undefined ? userHasLiked(bookId, ctx.user._id) : 0,
    ]);
    const isLogged = ctx.user != undefined;
    const isOwner = book._ownerId == ctx.user?._id;

    ctx.render(detailsTemplate(book, isOwner, isLogged, totalLikes, onLike, hasLiked, onDelete));

    async function onLike() {
        await like(bookId);
        ctx.page.redirect('/details/' + bookId);
    }

    async function onDelete() {
        const choice = confirm('Are u sure?');

        if (choice) {
            await deleteBook(bookId);
            ctx.page.redirect('/catalog');
        }
    }
}
