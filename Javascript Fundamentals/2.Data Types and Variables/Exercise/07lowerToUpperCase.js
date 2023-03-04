function lowerOrUpperCase(char) {
    isUpperCase = false;

    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        isUpperCase = true;
    }

    if (isUpperCase) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowerOrUpperCase('f');