function validate() {
  const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;
  document.getElementById('email').addEventListener('change', (e) => {
    const mail = e.target.value;

    if (!pattern.test(mail)) {
      e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
  });
}
