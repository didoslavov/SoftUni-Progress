function solve() {
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthDayInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');

    const tbody = document.getElementById('tbody');
    const budgetElement = document.getElementById('sum');

    const addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', onAdd);

    let budget = 0;

    function onAdd(e) {
        e.preventDefault();
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const birthday = birthDayInput.value;
        const position = positionInput.value;
        const salary = salaryInput.value;

        const areEmptyStrings =
            firstName == '' || lastName == '' || email == '' || birthday == '' || position == '' || salary == '';

        if (areEmptyStrings) {
            return;
        }

        budget += Number(salary);

        const tr = document.createElement('tr');
        const fnameTd = createElement('td', firstName);
        const lnameTd = createElement('td', lastName);
        const emailTd = createElement('td', email);
        const birthdayTd = createElement('td', birthday);
        const positionTd = createElement('td', position);
        const salaryTd = createElement('td', salary);
        const btnsTd = createElement('td');
        const firedBtn = createElement('button', 'Fired', { class: 'fired', onclick: onFire });
        const editBtn = createElement('button', 'Edit', { class: 'edit', onclick: onEdit });

        btnsTd.appendChild(firedBtn);
        btnsTd.appendChild(editBtn);

        tr.appendChild(fnameTd);
        tr.appendChild(lnameTd);
        tr.appendChild(emailTd);
        tr.appendChild(birthdayTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        tr.appendChild(btnsTd);

        tbody.appendChild(tr);

        budgetElement.textContent = budget.toFixed(2);

        clearInputField();

        function onEdit(e) {
            const editElement = e.target.parentElement.parentElement;

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            emailInput.value = email;
            birthDayInput.value = birthday;
            positionInput.value = position;
            salaryInput.value = salary;

            budget -= Number(salary);
            budgetElement.textContent = budget.toFixed(2);
            editElement.remove();
        }

        function onFire(e) {
            budget -= Number(salary);
            budgetElement.textContent = budget.toFixed(2);

            e.target.parentElement.parentElement.remove();
        }
    }

    function createElement(tagName, textContent, params) {
        const element = document.createElement(tagName);

        if (textContent) {
            element.textContent = textContent;
        }

        if (params) {
            Object.entries(params).forEach(([param, value]) => {
                if (param == 'class') {
                    element.classList.add(value);
                } else if (param == 'id') {
                    element.id = value;
                } else if (param == 'onclick') {
                    element.addEventListener('click', value);
                }
            });
        }

        return element;
    }

    function clearInputField() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthDayInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';
    }
}
solve();
