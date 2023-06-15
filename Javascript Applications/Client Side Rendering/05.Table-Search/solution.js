function solve() {
    window.addEventListener('load', loadTableData);
    const tbody = document.querySelector('tbody');
    const input = document.getElementById('searchField');

    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rows = tbody.querySelectorAll('tr');
        rows.forEach((r) => r.classList.remove('select'));
        const search = input.value.toLowerCase();

        if (!rows || search == '') {
            return;
        }

        rows.forEach((r) => {
            if (r.textContent.toLocaleLowerCase().includes(search)) {
                r.classList.add('select');
            }
        });

        input.value = '';
    }

    async function loadTableData() {
        const data = await getTableData();
        const tableData = Object.values(data).map((t) => {
            const row = createElement('tr', null, null, [
                createElement('td', `${t.firstName} ${t.lastName}`),
                createElement('td', t.email),
                createElement('td', t.course),
            ]);
            return row;
        });
        tbody.append(...tableData);
    }
    async function getTableData() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/table');

            if (response.ok != true) {
                const err = await response.json();
                throw new Error(err.message);
            }

            const data = await response.json();

            console.log(data);
            return data;
        } catch (error) {
            alert(error.message);
        }
    }

    function createElement(tagName, textContent, attributes, children = []) {
        const element = document.createElement(tagName);
        const PARAMS = {
            colspan: (value) => element.setAttribute('colspan', value),
            class: (value) => element.classList.add(value),
            id: (value) => (element.id = value),
            onclick: (value) => element.addEventListener('click', value),
            disabled: () => element.setAttribute('disabled', ''),
            src: (value) => element.setAttribute('src', value),
        };

        if (textContent) {
            element.textContent = textContent;
        }

        if (attributes) {
            Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
        }

        if (children.length == 0) {
            return element;
        }

        children.forEach((c) => element.appendChild(c));

        return element;
    }
}
solve();
