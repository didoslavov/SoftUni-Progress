import { deletePost, donate, getHasDonated, getPostById, getTotalDonations } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (post, isLogged, isOwner, totalDonations, hasDonated, onDonate, onDelete) => html`<section
    id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image" />
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${totalDonations}</p>
                <div class="btns">
                    ${isOwner
                        ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                              <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                        : nothing}
                    ${isLogged && !isOwner && !hasDonated
                        ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                        : nothing}
                </div>
            </div>
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const post = await getPostById(id);
    const isLogged = ctx.user != undefined;
    const isOwner = isLogged && ctx.user._id == post._ownerId;
    const [totalDonations, hasDonated] = await Promise.all([getTotalDonations(id), getHasDonated(id, ctx.user?._id)]);

    ctx.render(detailsTemplate(post, isLogged, isOwner, totalDonations, hasDonated, onDonate, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this post?');

        if (choice) {
            await deletePost(id);

            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await donate(id);

        ctx.page.redirect('/catalog/' + id);
    }
}
