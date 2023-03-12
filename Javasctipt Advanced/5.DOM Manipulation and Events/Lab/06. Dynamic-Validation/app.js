function validate() {
    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', mailValidate);
    const pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

    function mailValidate() {
        inputElement.classList.remove('error');
        const input = inputElement.value;

        if (!input.match(pattern)) {
            inputElement.classList.add('error');
        }
    }
}