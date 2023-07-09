import { getByUserId } from '../api/data.js';
import { html, nothing } from '../lib.js';

const myMemesTemplate = (memes, user) => html`<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img
            id="user-avatar-url"
            alt="user-profile"
            src=${user.gender == 'male' ? '../images/male.png' : '../images/female.png'} />
        <div class="user-content">
            <p>
                Username:
                ${user.email
                    .split('@')[0]
                    .split('')
                    .map((x, i) => (i == 0 ? x.toUpperCase() : x))
                    .join('')}
            </p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memes.length ? memes.map(memeTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>`;

const memeTemplate = (meme) => html`<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
    <a class="button" href="/catalog/${meme._id}">Details</a>
</div>`;

export async function showMyMemes(ctx) {
    const user = ctx.user;
    const userId = user._id;
    const memes = await getByUserId(userId);

    ctx.render(myMemesTemplate(memes, user));
}
