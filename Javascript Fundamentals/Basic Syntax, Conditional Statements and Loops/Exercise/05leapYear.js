function isLeapYear(year) {
    let isLeap = false;

    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        isLeap = true;
    }

    if (isLeap) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

isLeapYear(2003);