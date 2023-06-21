let userData = null;

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    loadPreview();

    if (userData != null) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('p.email span').textContent = userData.email;
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
        document.querySelectorAll('#addForm input').forEach((x) => (x.disabled = true));
    }

    document.querySelector('.load').addEventListener('click', loadPreview);
    document.getElementById('addForm').addEventListener('submit', onSubmitCreate);
    document.getElementById('logout').addEventListener('click', onLogout);

    document.getElementById('catches').addEventListener('click', onClick);
});

async function onLogout() {
    try {
        const response = await fetch('http://localhost:3030/users/logout/', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
        });

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }
        sessionStorage.removeItem('userData');
        window.location = './index.html';
    } catch (e) {
        alert(e.message);
    }
}

function onClick(e) {
    if (e.target.tagName == 'BUTTON') {
        const data = [...e.target.parentElement.getElementsByTagName('input')].reduce(
            (acc, x) => Object.assign(acc, { [x.className]: x.value }),
            {}
        );
        const id = e.target.dataset.id;

        if (e.target.textContent == 'Update') {
            updateCatch(id, data);
        } else {
            deleteCatch(id);
        }
    }
}

async function updateCatch(id, data) {
    try {
        if (Object.values(data).some((x) => x == '')) {
            loadPreview();
            throw new Error('All fields are required!');
        }
        const response = await fetch('http://localhost:3030/data/catches/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
            body: JSON.stringify(data),
        });
        loadPreview();
    } catch (error) {
        alert(error.message);
    }
}

async function deleteCatch(id) {
    try {
        const response = await fetch('http://localhost:3030/data/catches/' + id, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token,
            },
        });
        loadPreview();
    } catch (error) {
        alert(error.message);
    }
}

async function onSubmitCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = [...formData.entries()].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});

    try {
        if (Object.values(data).some((x) => x == '')) {
            throw new Error('All fields are required!');
        }

        const response = await fetch('http://localhost:3030/data/catches/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
            body: JSON.stringify(data),
        });

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        e.target.reset();
        loadPreview();
    } catch (error) {
        alert(error.message);
    }
}

async function loadPreview() {
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();

    document.getElementById('catches').replaceChildren(...data.map(preview));
}

function preview(item) {
    const isDisabled = userData && item._ownerId == userData.id;

    const div = document.createElement('div');
    div.className = 'catch';

    div.innerHTML = `<label>Angler</label>
  <input type="text" class="angler" value="${item.angler}" ${!isDisabled ? 'disabled' : ''}>
  <label>Weight</label>
  <input type="text" class="weight" value="${item.weight}" ${!isDisabled ? 'disabled' : ''}>
  <label>Species</label>
  <input type="text" class="species" value="${item.species}" ${!isDisabled ? 'disabled' : ''}>
  <label>Location</label>
  <input type="text" class="location" value="${item.location}" ${!isDisabled ? 'disabled' : ''}> 
  <label>Bait</label>
  <input type="text" class="bait" value="${item.bait}" ${!isDisabled ? 'disabled' : ''}>
  <label>Capture Time</label>
  <input type="number" class="captureTime" value="${item.captureTime}" ${!isDisabled ? 'disabled' : ''}>
  <button class="update" data-id="${item._id}" ${!isDisabled ? 'disabled' : ''}>Update</button>
  <button class="delete" data-id="${item._id}" ${!isDisabled ? 'disabled' : ''}>Delete</button>`;

    return div;
}
