function monthDays(month, year) {
    const getDays = (year, month) => new Date(year, month, 0).getDate();

    return getDays(year, month);
}

console.log(monthDays(1, 2012));
console.log(monthDays(2, 2021));