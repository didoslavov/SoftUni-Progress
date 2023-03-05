function softUniStudents(input) {
  const courses = {};

  for (const line of input) {
    if (line.includes(':')) {
      let [courseName, capacity] = line.split(': ');
      capacity = Number(capacity);

      if (!courses.hasOwnProperty(courseName)) {
        courses[courseName] = {
          capacity,
          students: [],
        };
      } else {
        courses[courseName].capacity += capacity;
      }
    } else {
      let [userName, credits, email, course] = line.split(/[\[]|(?:[\]][with email]+) | joins /gm);
      credits = Number(credits);

      if (courses.hasOwnProperty(course) && courses[course].capacity > 0) {
        courses[course].students.push({
          user: userName,
          credits: credits,
          email: email,
        });
        courses[course].capacity--;
      }
    }
  }
  const sortedByStudentsCount = Object.entries(courses)
  .sort((a, b) => Object.entries(b[1].students).length - Object.entries(a[1].students).length);

  for (const course of sortedByStudentsCount) {
    console.log(`${course[0]}: ${course[1].capacity} places left`);

    const sortedByCredits = Object.entries(course[1].students).sort(
      (a, b) => b[1].credits - a[1].credits
    );
    for (const student of sortedByCredits) {
      console.log(
        `--- ${student[1].credits}: ${student[1].user}, ${student[1].email}`
      );
    }
  }
}

softUniStudents([
  'JavaBasics: 2',
  'user1[25] with email user1@user.com joins C#Basics',
  'C#Advanced: 3',
  'JSCore: 4',
  'user2[30] with email user2@user.com joins C#Basics',
  'user13[50] with email user13@user.com joins JSCore',
  'user1[25] with email user1@user.com joins JSCore',
  'user8[18] with email user8@user.com joins C#Advanced',
  'user6[85] with email user6@user.com joins JSCore',
  'user6[85] with email user122@user.com joins JSCore',
  'JSCore: 2',
  'user11[3] with email user11@user.com joins JavaBasics',
  'user45[105] with email user45@user.com joins JSCore',
  'user007[20] with email user007@user.com joins JSCore',
  'user700[29] with email user700@user.com joins JSCore',
  'user900[88] with email user900@user.com joins JSCore',
]);
console.log('----------------');
softUniStudents([
  'JavaBasics: 15',
  'user1[26] with email user1@user.com joins JavaBasics',
  'user2[36] with email user11@user.com joins JavaBasics',
  'JavaBasics: 5',
  'C#Advanced: 5',
  'user1[26] with email user1@user.com joins C#Advanced',
  'user2[36] with email user11@user.com joins C#Advanced',
  'user3[6] with email user3@user.com joins C#Advanced',
  'C#Advanced: 1',
  'JSCore: 8',
  'user23[62] with email user23@user.com joins JSCore',
]);
