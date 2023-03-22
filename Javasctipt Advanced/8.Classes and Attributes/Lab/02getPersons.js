function getPerson() {
    class Person {
        constructor(firstName, lastName, age, email) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.age = age;
          this.email = email;
        }
      
        toString() {
          return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
      }
    const people = [];
    const person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const person1 = new Person('SoftUni');
    const person2 = new Person('Stephan', 'Johnson', 25);
    const person3 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    people.push(person, person1, person2, person3);
    return people;
}

console.log(getPerson());