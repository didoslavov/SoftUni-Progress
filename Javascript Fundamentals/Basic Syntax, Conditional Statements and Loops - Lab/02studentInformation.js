function studentInformation(name, age, grade){
    let studentName = name;
    let studentAge = Number(age);
    let avarageGrade = grade;

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${avarageGrade.toFixed(2)}`);
}

studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);