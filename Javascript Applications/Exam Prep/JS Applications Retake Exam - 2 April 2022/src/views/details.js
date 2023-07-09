import { deletePet, donate, getHasDonated, getPetById, getTotalDonations } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (pet, isLogged, isOwner, totalDonations, hasDonated, onDelete, onDonate) => html`<section
    id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image} />
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${totalDonations * 100}$</h4>
            </div>
            <div class="actionBtn">
                ${isOwner
                    ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                          <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                    : nothing}
                ${isLogged && !isOwner && !hasDonated
                    ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`
                    : nothing}
            </div>
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const user = ctx.user;
    const [pet, totalDonations, hasDonated] = await Promise.all([
        await getPetById(id),
        await getTotalDonations(id),
        await getHasDonated(id, user._id),
    ]);
    const isOwner = user && user._id === pet._ownerId;

    ctx.render(detailsTemplate(pet, user, isOwner, totalDonations, hasDonated, onDelete, onDonate));

    async function onDonate() {
        await donate({ petId: id });
        ctx.page.redirect('/catalog/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this?');

        if (choice) {
            await deletePet(id);
            ctx.page.redirect('/');
        }
    }
}
