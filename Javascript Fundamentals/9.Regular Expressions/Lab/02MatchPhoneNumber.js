function matchPhoneNumber(phoneNumbers) {
    const regExp = /\+359([ -])2\1(\d{3})\1(\d{4})\b/g;
    const phones = phoneNumbers[0];
    const validNumbers = phones.match(regExp);

    console.log(validNumbers.join(', '));
    
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
);