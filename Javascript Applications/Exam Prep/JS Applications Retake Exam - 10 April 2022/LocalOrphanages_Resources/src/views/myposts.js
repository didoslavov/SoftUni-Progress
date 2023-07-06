import { getMyPosts } from '../api/data.js';
import { html } from '../lib.js';

const myPostsTemplate = (posts) => html`<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${posts.length > 0
        ? html`<div class="my-posts">${posts.map(postTemplate)}</div>`
        : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

const postTemplate = (post) => html`<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} />
    <div class="btn-wrapper">
        <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

export async function showMyPosts(ctx) {
    const userId = ctx.user?._id;
    const posts = await getMyPosts(userId);

    ctx.render(myPostsTemplate(posts));
}
