document.querySelectorAll('a').forEach(x => x.classList.remove('active'));
document.getElementById('register').classList.add('active');
document.getElementById('logout').style.display = 'none';
const p = document.querySelector('p.notification');

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', onLogin);
});


async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
    if (!email || !password || !rePass) {
        p.textContent = 'All fields are required';

        setTimeout(() => {
            p.textContent = '';
        }, 2000);
        throw new Error('All fields are required')
    }
    if (password != rePass){
        p.textContent = 'Passwords don\'t match!';

        setTimeout(() => {
            p.textContent = '';
        }, 2000);
        throw new Error('Passwords don\'t match!')
    }

        const response = await fetch('http://localhost:3030/users/register/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok != true) {
            const error = await response.json();
            p.textContent = error.message;
        }

        const data = await response.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken,
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';

    } catch (error) {
        p.textContent = error.message;

        setTimeout(() => {
            p.textContent = '';
        }, 2000);
    }
}