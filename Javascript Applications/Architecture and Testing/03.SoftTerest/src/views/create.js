import { creeateElement } from '../dom.js';

const section = document.getElementById('createPage');
section.remove();

export async function showCreatePage(ctx) {
  ctx.showSection(section);
}
