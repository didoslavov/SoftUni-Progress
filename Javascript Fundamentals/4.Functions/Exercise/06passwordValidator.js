function passwordValidation(password) {
    
  const isValid = (pass) => {
    const isCharInt = /^[A-Za-z0-9]*$/.test(pass);
    const lengthIsValid = pass.length >= 6 && pass.length <= 10;
    const minDigits = /\d{2}$/.test(pass);

    if (isCharInt && lengthIsValid && minDigits >= 2) {
       console.log('Password is valid');
    }
    if (!lengthIsValid) {
       console.log('Password must be between 6 and 10 characters');
    }
    if (!isCharInt) {
       console.log('Password must consist only of letters and digits');
    }
    if (!minDigits) {
       console.log('Password must have at least 2 digits');
    }
  };

  return isValid(password);
}

passwordValidation('Pa$s$s21');
