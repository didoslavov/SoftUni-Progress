export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export function createSubmitHandler(callback) {
    return function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        callback(data);
    };
}

export function notify(message) {
    const notifyElement = document.getElementById('errorBox');
    const notification = document.querySelector('#errorBox span');

    notifyElement.style.display = 'block';
    notification.textContent = message;

    setTimeout(() => (notifyElement.style.display = 'none'), 3000);
}
