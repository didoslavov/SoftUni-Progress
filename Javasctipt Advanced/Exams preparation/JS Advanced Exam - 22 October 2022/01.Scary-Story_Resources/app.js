window.addEventListener("load", solve);

function solve() {
  const previewUlElement = document.getElementById('preview-list');
  //Input elements:
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const storyTitleElement = document.getElementById('story-title');
  const genreElement = document.getElementById('genre');
  const textAreaElement = document.getElementById('story');

  var firstName;
  let lastName;
  let age;
  let title;
  let genre;
  let text;

  //Select buttons and add event listeners:
  const publishBtnElement = document.getElementById('form-btn');
  publishBtnElement.addEventListener('click', publish);

  function edit() {
    const liElement = document.querySelector('.story-info');
    previewUlElement.removeChild(liElement);
    firstNameElement.value = firstName;
    lastNameElement.value = lastName;
    ageElement.value = age;
    storyTitleElement.value = title;
    genreElement.value = genre;
    textAreaElement.value = text;
    publishBtnElement.disabled = false;
  }

  function save() {
    const divMainElement = document.getElementById('main');
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Your scary story is saved!';
    divMainElement.innerHTML = '';
    divMainElement.appendChild(h1Element);
  }

  function del() {
    const storyInfoElement = document.getElementsByClassName('story-info')[0];
    previewUlElement.removeChild(storyInfoElement);
    publishBtnElement.disabled = false;
  }

  function publish() {
    firstName = firstNameElement.value;
    lastName = lastNameElement.value;
    age = ageElement.value;
    title = storyTitleElement.value;
    genre = genreElement.value;
    text = textAreaElement.value;

    if (!firstName
     || !lastName
     || !age
     || !title
     || !text) {
      return;
     }

     const liElement = document.createElement('li');
     liElement.classList.add('story-info');
     const articleElement = document.createElement('article');

     const saveBtnElement = document.createElement('button');
     saveBtnElement.classList.add('save-btn');
     saveBtnElement.innerText = 'Save Story';
     const editBtnElement = document.createElement('button');
     editBtnElement.classList.add('edit-btn');
     editBtnElement.innerText = 'Edit Story';
     const deleteBtnElement = document.createElement('button');
     deleteBtnElement.classList.add('delete-btn');
     deleteBtnElement.innerText = 'Delete Story';

     const nameH4Element = document.createElement('h4');
     nameH4Element.innerText = `Name: ${firstName} ${lastName}`
     const agePElement = document.createElement('p');
     agePElement.innerText = `Age: ${age}`;
     const titlePElement = document.createElement('p');
     titlePElement.innerText = `Title: ${title}`;
     const genrePElement = document.createElement('p');
     genrePElement.innerText = `Genre: ${genre}`;
     const textPElement = document.createElement('p');
     textPElement.innerText = text;

     articleElement.appendChild(nameH4Element);
     articleElement.appendChild(agePElement);
     articleElement.appendChild(titlePElement);
     articleElement.appendChild(genrePElement);
     articleElement.appendChild(textPElement);

     liElement.appendChild(articleElement);
     liElement.appendChild(saveBtnElement);
     liElement.appendChild(editBtnElement);
     liElement.appendChild(deleteBtnElement);

     previewUlElement.appendChild(liElement);

     firstNameElement.value = '';
     lastNameElement.value = '';
     ageElement.value = '';
     storyTitleElement.value = '';
     genreElement.value = 'Disturbing'
     textAreaElement.value = '';
     publishBtnElement.disabled = true;

     editBtnElement.addEventListener('click', edit);
     saveBtnElement.addEventListener('click', save);
     deleteBtnElement.addEventListener('click', del);
  }
}
