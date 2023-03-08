function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    const buttonTextContent = document.getElementsByClassName('button')[0];
    const hiddenElement = document.getElementById('extra');


    if (buttonTextContent.innerHTML === 'More') {
        hiddenElement.style.display = 'block';
        buttonElement.innerHTML = 'Less';
    } else {
        hiddenElement.style.display = 'none';
        buttonElement.innerHTML = 'More';
    }
}