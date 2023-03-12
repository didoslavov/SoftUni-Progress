function focused() {
  const boxElements = Array.from(document.querySelectorAll('input'));

  boxElements.forEach((x) => {
    x.addEventListener('focus', onFocus);
    x.addEventListener('blur', onBlur);
  });

  function onFocus(e) {
    e.target.parentElement.classList.add('focused');
  }

  function onBlur(e) {
    e.target.parentElement.classList.remove('focused');
  }
}
