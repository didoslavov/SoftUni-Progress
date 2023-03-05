function bonusPointsCalculator(studentsInfo) {
    const totalStudents = Number(studentsInfo.shift());
    const totalLectures = Number(studentsInfo.shift());
    const additionalBonus = Number(studentsInfo.shift());

    let totalBonus = (attendances, lectures, bonus) => {
        const totalBonus = attendances / lectures * (5 + bonus);
        return totalBonus;
    };

    let maxBonus = 0;
    let maxAttendances = 0;
    
    for (const attendances of studentsInfo) {
        let currentMaxBonus = totalBonus(attendances, totalLectures, additionalBonus);

        if (currentMaxBonus >= maxBonus) {
            maxBonus = currentMaxBonus;
            maxAttendances = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusPointsCalculator([
  '5',  '25', '30',
  '12', '19', '24',
  '16', '20'
]
);