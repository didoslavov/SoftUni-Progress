import { deleteById, getById } from '../api/data.js';
import { creeateElement } from '../dom.js';

const section = document.getElementById('detailsPage');
section.remove();

let ctx = null;

export async function showDetailsPage(ctxTarget, id) {
  ctx = ctxTarget;
  ctx.showSection(section);
  laodIdea(id);
}

async function laodIdea(id) {
  const idea = await getById(id);

  section.replaceChildren(createIdeaDiv(idea));
}

function createIdeaDiv(idea) {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(creeateElement('img', { className: 'det-img', src: idea.img }));
  fragment.appendChild(
    creeateElement(
      'div',
      { className: 'desc' },
      creeateElement('h2', { className: 'display-5' }, idea.title),
      creeateElement('p', { className: 'infoType' }, 'Description:'),
      creeateElement('p', { className: 'idea-description' }, idea.description)
    )
  );

  const userData = JSON.parse(sessionStorage.getItem('userData'));

  if (userData && userData.id == idea._ownerId) {
    fragment.appendChild(
      creeateElement('div', { className: 'text-center' }, creeateElement('a', { className: 'btn detb', href: '', onClick: onDelete }, 'Delete'))
    );
  }

  return fragment;

  async function onDelete(e) {
    e.preventDefault();

    const confirmed = confirm('Are you sure you want to delete this idea?');

    if (confirmed) {
      await deleteById(idea._id);
      ctx.goTo('catalog');
    }
  }
}
