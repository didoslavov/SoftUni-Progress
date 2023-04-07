function lockedProfile() {
    const mainElement = document.getElementById('main');
    const inputElements = document.querySelectorAll('input');
    const profileElement = document.querySelector('.profile');
    const hiddenDivElement = document.querySelector('.user1Username');

    hiddenDivElement.style.display = 'none';
    mainElement.innerHTML = '';


    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            const [radioLock, radioUnclock, userName, _email, _age] = Array.from(inputElements);
            Object.values(data).forEach(p => {
                const { _id, age, email, username } = p;
                userName.value = username;
                _email.value = email;
                _age.value = age;
                radioLock.checked = true;

                const currentDivElement = profileElement.cloneNode(true);
                currentDivElement.addEventListener('click', showMore);
                mainElement.appendChild(currentDivElement);
            });
            
        });
}

function showMore(e) {
    if (e.target.tagName === 'BUTTON' && !e.target.parentElement.children[2].checked) {
        const hiddentElement = e.target.parentElement.children[9];

        if (hiddentElement.style.display === 'block') {
            hiddentElement.style.display = 'none';
            e.target.innerText = 'Show more';
        } else {
            hiddentElement.style.display = 'block';
            e.target.innerText = 'Hide it';
        }
    }
}
