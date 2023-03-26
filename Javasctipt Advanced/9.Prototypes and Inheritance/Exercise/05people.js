function people() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.dividend = 0;
      this.currentTask = 0;
      this.tasks = [];
    }

    work() {
      if (this.currentTask >= this.tasks.length) {
        this.currentTask = 0;
      }
      console.log(`${this.name} ${this.tasks[this.currentTask]}`);
      this.currentTask++;
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ['is working on a simple task.'];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [
        'is working on a complicated task.',
        'is taking time off work.',
        'is supervising junior workers.',
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ['scheduled a meeting.', 'is preparing a quarterly report.'];
    }

    collectSalary() {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`
      );
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const classes = people();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
