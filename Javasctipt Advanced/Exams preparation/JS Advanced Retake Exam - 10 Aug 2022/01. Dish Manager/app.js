window.addEventListener("load", solve);

function solve() {
  document.getElementById('form-btn').addEventListener('click', main);
  
  function main(e) {
    e.preventDefault();
    document.getElementById('clear-btn').addEventListener('click', clear);
    
    //Select input fields
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const ageElement = document.getElementById('age');
    const genderElement = document.getElementById('genderSelect');
    const textAreaElement = document.getElementById('task');
    
    //Get values from input fields
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const gender = genderElement.value;
    const description = textAreaElement.value;
    
    //validate input, if one of the fields is empty, do nothing
    if (!firstName || !lastName || !age || !description) {
      return;
    }
    
    //Select In Progress Element
    const ulInProgress = document.getElementById('in-progress');
    
    //Create new elements and add functionallity
    const liElement = document.createElement('li');
    const article = document.createElement('article');
    const h4NameElement = document.createElement('h4');
    const pInfoElement = document.createElement('p');
    const pDescriptionElement = document.createElement('p');
    
    const editBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    liElement.classList.add('each-line');
    h4NameElement.textContent = `${firstName} ${lastName}`;
    pInfoElement.textContent = `${gender}, ${age}`;
    pDescriptionElement.textContent = `Dish description: ${description}`;

    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', edit);
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = 'Mark as complete';
    completeBtn.addEventListener('click', complete);

    article.appendChild(h4NameElement);
    article.appendChild(pInfoElement);
    article.appendChild(pDescriptionElement);
    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);
    ulInProgress.appendChild(liElement);

    //Clear input fields
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderElement.value = 'Male';
    textAreaElement.value = '';

    //Increase id "progress-count" by 1
    const progressCountElement = document.getElementById('progress-count');
    progressCountElement.textContent = Number(progressCountElement.textContent) + 1; // ****
    
    function edit() {
      //Populate the input fields
      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      genderElement.value = gender;
      textAreaElement.value = description;

      //Remove elements from in progress UL
      ulInProgress.removeChild(liElement);

      //Decrease id "progress-count" by 1
      progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
    }

    function complete() {
      //Select elements and Append li element from UL id "in-progress" to UL id "finished"
      const ulFinishedElement = document.getElementById('finished');
      ulFinishedElement.appendChild(liElement);

      //Remove buttons from li element
      editBtn.remove();
      completeBtn.remove();

      //Decrease id "progress-count" by 1
      progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
    }

    function clear() {
      //Clear the UL list
      document.getElementById('finished').removeChild(liElement);
    }
  }
}
