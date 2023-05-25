window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const dateInElement = document.getElementById('date-in');
    const dateOutElement = document.getElementById('date-out');
    const peopleCountElement = document.getElementById('people-count');
    const nextBtnElement = document.getElementById('next-btn');
    const confirmationH1Element = document.getElementById('verification');
    const infoListUlElement = document.getElementsByClassName('info-list')[0];
    const confirmListUlElement = document.getElementsByClassName('confirm-list')[0];
    nextBtnElement.addEventListener('click', next);

    const infoListArticleElement = document.createElement('article');
    const infoListLiElement = document.createElement('li');
    const nameH3Element = document.createElement('h3');
    const fromDatePElement = document.createElement('p');
    const toDatePElement = document.createElement('p');
    const peopleCountPElement = document.createElement('p');

    let firstName;
    let lastName;
    let dateIn;
    let dateOut;
    let people;

    const editButtonElement = document.createElement('button');
    editButtonElement.textContent = 'Edit';
    editButtonElement.classList.add('edit-btn');
    const continueButtonElement = document.createElement('button');
    continueButtonElement.textContent = 'Continue';
    continueButtonElement.classList.add('continue-btn');

    editButtonElement.addEventListener('click', edit);
    continueButtonElement.addEventListener('click', continueBtn);

    function edit() {
        nextBtnElement.disabled = false;
        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        dateInElement.value = dateIn;
        dateOutElement.value = dateOut;
        peopleCountElement.value = people;
        infoListUlElement.removeChild(infoListLiElement);
    }

    function continueBtn() {
        const confirmation = infoListUlElement.removeChild(infoListLiElement);
        const buttons = confirmation.querySelectorAll('button');
        buttons[0].classList.remove('edit-btn');
        buttons[0].classList.add('confirm-btn');
        buttons[0].textContent = 'Confirm';
        buttons[0].removeEventListener('click', edit);
        buttons[0].addEventListener('click', confirmBtn);

        buttons[1].classList.remove('continue-btn');
        buttons[1].classList.add('cancel-btn');
        buttons[1].textContent = 'Cancel';
        buttons[1].removeEventListener('click', continueBtn);
        buttons[1].addEventListener('click', cancelBtn);
        confirmListUlElement.appendChild(confirmation);
    }

    function confirmBtn() {
        nextBtnElement.disabled = false;
        const confirmationElement = document.getElementsByClassName('reservation-content')[0];
        confirmationH1Element.classList.add('reservation-confirmed');
        confirmationH1Element.textContent = 'Confirmed.';
        confirmListUlElement.removeChild(confirmationElement);
        const buttons = confirmationElement.querySelectorAll('button');
        buttons[0].classList.remove('confirm-btn');
        buttons[0].classList.add('edit-btn');
        buttons[0].textContent = 'Edit';
        buttons[0].removeEventListener('click', confirmBtn);
        buttons[0].addEventListener('click', edit);

        buttons[1].classList.remove('cancel-btn');
        buttons[1].classList.add('continue-btn');
        buttons[1].textContent = 'Continue';
        buttons[1].removeEventListener('click', cancelBtn);
        buttons[1].addEventListener('click', continueBtn);
    }

    function cancelBtn() {
        nextBtnElement.disabled = false;
        const confirmationElement = document.getElementsByClassName('reservation-content')[0];
        confirmationH1Element.classList.add('reservation-cancelled');
        confirmationH1Element.textContent = 'Cancelled.';
        confirmListUlElement.removeChild(confirmationElement);

        const buttons = confirmationElement.querySelectorAll('button');
        buttons[0].classList.remove('confirm-btn');
        buttons[0].classList.add('edit-btn');
        buttons[0].textContent = 'Edit';
        buttons[0].removeEventListener('click', confirmBtn);
        buttons[0].addEventListener('click', edit);

        buttons[1].classList.remove('cancel-btn');
        buttons[1].classList.add('continue-btn');
        buttons[1].textContent = 'Continue';
        buttons[1].removeEventListener('click', cancelBtn);
        buttons[1].addEventListener('click', continueBtn);
    }

    function next(event) {
        event.preventDefault();
        firstName = firstNameElement.value;
        lastName = lastNameElement.value;
        dateIn = dateInElement.value;
        dateOut = dateOutElement.value;
        people = peopleCountElement.value;

        if (
            firstName === '' ||
            lastName === '' ||
            people === '' ||
            dateIn === '' ||
            dateOut === '' ||
            new Date(dateIn) >= new Date(dateOut)
        ) {
            return;
        }
        const fullName = firstName + ' ' + lastName;
        const fromDate = dateIn;
        const toDate = dateOut;
        const peopleCount = people;
        nameH3Element.textContent = `Name: ${fullName}`;
        fromDatePElement.textContent = `From date: ${fromDate}`;
        toDatePElement.textContent = `To date: ${toDate}`;
        peopleCountPElement.textContent = `For ${peopleCount} people`;

        infoListArticleElement.appendChild(nameH3Element);
        infoListArticleElement.appendChild(fromDatePElement);
        infoListArticleElement.appendChild(toDatePElement);
        infoListArticleElement.appendChild(peopleCountPElement);

        infoListLiElement.classList.add('reservation-content');
        infoListLiElement.appendChild(infoListArticleElement);
        infoListUlElement.appendChild(infoListLiElement);
        infoListLiElement.appendChild(editButtonElement);
        infoListLiElement.appendChild(continueButtonElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        dateInElement.value = '';
        dateOutElement.value = '';
        peopleCountElement.value = '';
        nextBtnElement.disabled = true;
    }
}
