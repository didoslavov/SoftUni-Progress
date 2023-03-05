function weekDay (day) {
    const weekDays = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }

    if (!weekDays.hasOwnProperty(day)){
        return 'error';
    }

    return weekDays[day];
}

console.log(weekDay('Monday'));
console.log(weekDay('Friday'));
console.log(weekDay('Invalid'));