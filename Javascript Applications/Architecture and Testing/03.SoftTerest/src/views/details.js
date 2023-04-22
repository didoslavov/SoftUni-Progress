import { getById } from '../api/data.js';
import { creeateElement } from '../dom.js';

const section = document.getElementById('detailsPage');
section.remove();

export async function showDetailsPage(ctx, id) {
  console.log(id);
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
  fragment.appendChild(creeateElement('div', { className: 'text-center' }, creeateElement('a', { className: 'btn detb', href: '' }, 'Delete')));

  return fragment;
}
