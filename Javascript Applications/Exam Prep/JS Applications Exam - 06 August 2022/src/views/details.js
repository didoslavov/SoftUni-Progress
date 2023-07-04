import { apply, deleteById, getAllApplications, getById, getHasApplied } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (offer, isLogged, isOwner, onDelete, total, hasApplied, onApply) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">Category: <span id="categories">${offer.category}</span></p>
        <p id="details-salary">Salary: <span id="salary-number">${offer.salary}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${total}</strong></p>
        <div id="action-buttons">
            ${isOwner
                ? html`<a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a> `
                : nothing}
            ${isLogged && !isOwner && !hasApplied
                ? html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`
                : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const offer = await getById(id);
    const isLogged = ctx.user != undefined;
    const isOwner = isLogged && ctx.user._id == offer._ownerId;
    const [total, hasApplied] = await Promise.all([getAllApplications(id), getHasApplied(id, ctx.user._id)]);

    ctx.render(detailsTemplate(offer, isLogged, isOwner, onDelete, total, hasApplied, onApply));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?');

        if (choice) {
            await deleteById(id);

            ctx.page.redirect('/catalog');
        }
    }

    async function onApply() {
        await apply(id);
        ctx.page.redirect('/catalog/' + id);
    }
}
