function lockedProfile() {
  Array.from(document.querySelectorAll('button')).forEach((b) =>
    b.addEventListener('click', showHiddenInfo)
  );

  function showHiddenInfo(e) {
    let isLocked = e.target.parentElement.children[2].checked;
    const hiddenText = e.target.previousElementSibling;

    if (!isLocked) {
        const button = e.currentTarget;

        if (button.textContent === 'Show more') {
            hiddenText.style.display = 'block';
            button.textContent = 'Hide it';
        } else if (button.textContent === 'Hide it') {
            hiddenText.style.display = 'none';
            button.textContent = 'Show more'
        }
    }
  }
}
