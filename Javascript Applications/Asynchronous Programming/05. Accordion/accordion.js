async function solution() {
  const main = document.getElementById('main');

  
  const resolve = await fetch('http://localhost:3030/jsonstore/advanced/articles/list')
  const data = await resolve.json()
      data.forEach(async el => {
          const content = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${el._id}`)
          const pContent = await content.json();

          const accordeonDiv = createElement('div', '', { class: 'accordion' });
          const headDiv = createElement('div', '', { class: 'head' });
          const span = createElement('span', el.title);
          const button = createElement('button', 'More', {
          class: 'button',
          id: el._id,
        });
        const extraDiv = createElement('div', '', { class: 'extra' });
        const p = createElement('p', pContent.content);

        button.addEventListener('click', toggle);

        headDiv.appendChild(span);
        headDiv.appendChild(button);
        accordeonDiv.appendChild(headDiv);
        extraDiv.appendChild(p);
        accordeonDiv.appendChild(extraDiv);
        main.appendChild(accordeonDiv);
      
    });
}

solution();

function toggle(e) {
    if (e.target.textContent === 'More') {
        e.target.textContent = 'Less';
        e.target.parentElement.parentElement.children[1].style.display = 'block';
    } else {
        e.target.textContent = 'More';
        e.target.parentElement.parentElement.children[1].style.display = 'none';
    }
}

function createElement(type, content, attributes = {}) {
  const currentAttributes = Object.keys(attributes);
  const element = document.createElement(type);

  if (content) {
    element.textContent = content;
  }

  if (currentAttributes.length > 0) {
    for (const attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  return element;
}
