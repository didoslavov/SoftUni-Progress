function solve() {
  const taskElement = document.querySelector('#task');
  const descriptionElement = document.querySelector('#description');
  const dateElement = document.querySelector('#date');
  const addButtonElement = document.querySelector('#add');
  const open = document
    .querySelectorAll('section')[1]
    .querySelectorAll('div')[1];
  const inProgress = document
    .querySelectorAll('section')[2]
    .querySelectorAll('div')[1];
  const complete = document
    .querySelectorAll('section')[3]
    .querySelectorAll('div')[1];

  addButtonElement.addEventListener('click', onClick);

  function onClick(e) {
    e.preventDefault();
    const taskInput = taskElement.value;
    const descriptionInput = descriptionElement.value;
    const dateInput = dateElement.value;
    const isInvalid = !taskInput && !descriptionInput && !dateInput;

    if (isInvalid) return;

    createArticle(
      'open',
      'green',
      'red',
      taskInput,
      descriptionInput,
      dateInput
    );

    taskElement.value = '';
    descriptionElement.value = '';
    dateElement.value = '';
  }

  function createArticle(
    tabType,
    firstBtnClass,
    secondBtnClass,
    task,
    description,
    date
  ) {
    const newArticleElement = document.createElement('article');
    const h3Element = document.createElement('h3');
    h3Element.textContent = task;
    const descriptionParaElement = document.createElement('p');
    descriptionParaElement.textContent = `Description: ${description}`;
    const dateParaElement = document.createElement('p');
    dateParaElement.textContent = `Due Date: ${date}`;

    newArticleElement.appendChild(h3Element);
    newArticleElement.appendChild(descriptionParaElement);
    newArticleElement.appendChild(dateParaElement);

    if (tabType === 'open') {
      const btnsDivElement = document.createElement('div');
      btnsDivElement.className = 'flex';

      const startBtn = document.createElement('button');
      startBtn.textContent = 'Start';
      startBtn.className = firstBtnClass;
      startBtn.addEventListener('click', () => {
        removeArticle(newArticleElement);
        createArticle('In Progress', 'red', 'orange', task, description, date);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = secondBtnClass;
      deleteBtn.addEventListener('click', () =>
        removeArticle(newArticleElement)
      );

      btnsDivElement.appendChild(startBtn);
      btnsDivElement.appendChild(deleteBtn);
      newArticleElement.appendChild(btnsDivElement);
      open.appendChild(newArticleElement);
    } else if (tabType === 'In Progress') {
      const btnsDivElement = document.createElement('div');
      btnsDivElement.className = 'flex';

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = firstBtnClass;
      deleteBtn.addEventListener('click', () =>
        removeArticle(newArticleElement)
      );

      const finishBtn = document.createElement('button');
      finishBtn.textContent = 'Finish';
      finishBtn.className = secondBtnClass;
      finishBtn.addEventListener('click', () => {
        removeArticle(newArticleElement);
        createArticle('Complete', null, null, task, description, date);
      });

      btnsDivElement.appendChild(deleteBtn);
      btnsDivElement.appendChild(finishBtn);
      newArticleElement.appendChild(btnsDivElement);
      inProgress.appendChild(newArticleElement);
    } else if (tabType === 'Complete') {
        complete.appendChild(newArticleElement);
    }
  }

  function removeArticle(article) {
    article.remove();
  }
}
