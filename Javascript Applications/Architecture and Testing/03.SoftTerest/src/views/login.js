import { creeateElement } from '../dom.js';

const section = document.getElementById('loginPage');
section.remove();

export async function showLoginPage(ctx) {
  ctx.showSection(section);
}
