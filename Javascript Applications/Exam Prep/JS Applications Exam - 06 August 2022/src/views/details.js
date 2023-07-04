import { getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (offer, isLogged, isOwner) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">Category: <span id="categories">${offer.category}</span></p>
        <p id="details-salary">Salary: <span id="salary-number">7000</span></p>
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
        <p>Applications: <strong id="applications">1</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${isOwner
                ? html`<a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                      <a href="javasctipt:void(0)" id="delete-btn">Delete</a> `
                : nothing}
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${isLogged && !isOwner ? html`<a href="javasctipt:void(0)" id="apply-btn">Apply</a>` : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const offer = await getById(id);
    const isLogged = ctx.user != undefined;
    const isOwner = isLogged && ctx.user._id == offer._ownerId;

    ctx.render(detailsTemplate(offer, isLogged, isOwner));
}
