function validate() {
  document.getElementById('submit').type = 'button';
  document.getElementById('submit').addEventListener('click', submit);
  const usernameElement = document.getElementById('username');
  const emailElement = document.getElementById('email');
  const passwordElement = document.getElementById('password');
  const confirmPasswordElement = document.getElementById('confirm-password');
  const validDivElement = document.getElementById('valid');
  const companyNumberElement = document.getElementById('companyNumber');
  const companyElement = document.getElementById('companyInfo');
  const checkBox = document.getElementById('company');

  checkBox.addEventListener('change', (e) => {
    if (e.target.checked) {
      companyElement.style.display = 'block';
    } else {
      companyElement.style.display = 'none';
    }
  });

  function submit() {
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
    const passwordsRegex = /^[\w]{5,15}$/;
    const validations = [];
    const username = usernameElement.value;
    const mail = emailElement.value;
    const password = passwordElement.value;
    const confirmPassword = confirmPasswordElement.value;

    if (usernameRegex.test(username)) {
      usernameElement.style.borderColor = '';
      validations.push(true);
    } else {
      usernameElement.style.borderColor = 'red';
      validations.push(false);
    }

    if (emailRegex.test(mail)) {
      emailElement.style.borderColor = '';
      validations.push(true);
    } else {
      emailElement.style.borderColor = 'red';
      validations.push(false);
    }

    if (
      password === confirmPassword &&
      passwordsRegex.test(password) &&
      passwordsRegex.test(confirmPassword)
    ) {
      passwordElement.style.borderColor = '';
      confirmPasswordElement.style.borderColor = '';
      validations.push(true);
    } else {
      passwordElement.style.borderColor = 'red';
      confirmPasswordElement.style.borderColor = 'red';
      validations.push(false);
    }

    if (checkBox.checked) {
      const companyNumber = companyNumberElement.value;

      if (companyNumber >= 1000 && companyNumber <= 9999) {
        companyNumberElement.style.borderColor = '';
        validations.push(true);
      } else {
        companyNumberElement.style.borderColor = 'red';
        validations.push(false);
      }
    }
    if (!validations.includes(false)) {
      validDivElement.style.display = 'block';
    } else {
      validDivElement.style.display = 'none';
    }
  }
}
