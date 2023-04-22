const section = document.getElementById('homePage');
section.querySelector('#getStartedLink').addEventListener('click', e => {
  e.preventDefault();
  ctx.goTo('catalog');
});
section.remove();

let ctx = null;

export async function showHomePage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}
