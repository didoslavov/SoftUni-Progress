window.addEventListener('load', solve);

function solve() {
  const ulTicketInfoElement = document.querySelector('.ticket-info-list');
  const ulConfirmTicketElement = document.querySelector('.confirm-ticket');
  const nextBtn = document.getElementById('next-btn');
  const main = document.getElementById('main');

  const form = document.querySelector('form');
  form.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const peopleCount = peopleCountInput.value;
    const fromDate = fromDateInput.value;
    const daysCount = daysCountInput.value;

    if (firstName == '' || lastName == '' || peopleCount == '' || fromDate == '' || daysCount == '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('ticket');
    liElement.innerHTML = `<article>
          <h3>Name: ${firstName} ${lastName}</h3>
          <p>From date: ${fromDate}</p>
          <p>For ${daysCount} days</p>
          <p>For ${peopleCount} people</p>
      </article>
      <button class="edit-btn">Edit</button>
      <button class="continue-btn">Continue</button>`;

    ulTicketInfoElement.appendChild(liElement);

    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', onEdit);
    const continueBtn = document.querySelector('.continue-btn');
    continueBtn.addEventListener('click', onContinue);

    form.reset();
    nextBtn.disabled = true;

    function onEdit() {
      form.querySelector('#first-name').value = firstName;
      form.querySelector('#last-name').value = lastName;
      form.querySelector('#people-count').value = peopleCount;
      form.querySelector('#from-date').value = fromDate;
      form.querySelector('#days-count').value = daysCount;

      ulTicketInfoElement.innerHTML = '';
      nextBtn.disabled = false;
    }

    function onContinue() {
      ulTicketInfoElement.innerHTML = '';

      const confirmBtn = liElement.querySelector('.edit-btn');
      confirmBtn.classList.add('confirm-btn');
      confirmBtn.classList.remove('edit-btn');
      confirmBtn.removeEventListener('click', onEdit);
      confirmBtn.addEventListener('click', onConfirm);
      confirmBtn.textContent = 'Confirm';

      const cancelBtn = liElement.querySelector('.continue-btn');
      cancelBtn.classList.add('cancel-btn');
      cancelBtn.classList.remove('continue-btn');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.removeEventListener('click', onContinue);
      cancelBtn.addEventListener('click', onCancel);

      ulConfirmTicketElement.appendChild(liElement);
    }
  }

  function onCancel() {
    nextBtn.disabled = false;
    ulConfirmTicketElement.innerHTML = '';
  }

  function onConfirm() {
    ulConfirmTicketElement.innerHTML = '';
    main.remove();
    const body = document.getElementById('body');

    const h1 = document.createElement('h1');
    h1.id = 'thank-you';
    h1.textContent = 'Thank you, have a nice day!';

    const btn = document.createElement('button');
    btn.id = 'back-btn';
    btn.textContent = 'Back';
    btn.addEventListener('click', reload);

    body.appendChild(h1);
    body.appendChild(btn);

    function reload() {
      location.reload();
    }
  }
}
