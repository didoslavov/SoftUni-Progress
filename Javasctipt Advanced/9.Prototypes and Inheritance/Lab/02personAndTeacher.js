function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {Person, Teacher};
}
let classes = personAndTeacher();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('pesho','pesho@gmail.com','Mathematics');
console.log(t);