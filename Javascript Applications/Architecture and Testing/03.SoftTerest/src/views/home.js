const section = document.getElementById('homePage');
section.remove();
section.querySelector('#getStartedLink').addEventListener('click', e => {
  e.preventDefault();
  ctx.goTo('catalog');
});

let ctx = null;

export async function showHomePage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}
