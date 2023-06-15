window.addEventListener('load', getOptions);

const menuElement = document.getElementById('menu');
const input = document.getElementById('itemText');
const addBtn = document.querySelector('[type="submit"]');

addBtn.addEventListener('click', addItem);

async function getOptions() {
    menuElement.querySelectorAll('option').forEach((o) => o.remove());
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        const options = Object.values(data).map((o) => {
            const option = document.createElement('option');
            option.value = o._id;
            option.textContent = o.text;
            return option;
        });

        menuElement.append(...options);
    } catch (error) {
        alert(error.message);
    }
}

async function addItem(e) {
    e.preventDefault();

    try {
        if (input.value == '') {
            throw new Error('Input cannot be empty');
        }

        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: input.value }),
        });

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        await getOptions();
    } catch (error) {
        alert(error.message);
    }
}
