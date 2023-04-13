document.querySelectorAll('a').forEach(x => x.classList.remove('active'));
document.getElementById('login').classList.add('active');
document.getElementById('logout').style.display = 'none';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', onLogin);
});


async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        if (email == '') {
            throw new Error('Email is required');
        }
        if (password == '') {
            throw new Error('Password is required');
        }


        const response = await fetch('http://localhost:3030/users/login/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        const userData = {
            id: data._id,
            email: data.email,
            token: data.accessToken,
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = 'index.html';

    } catch (error) {
        alert(error.message)
    }
}