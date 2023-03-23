class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    const isValidName = name !== '' && name !== undefined && name !== null;
    const isValidSalary =
      salary !== '' && salary !== undefined && salary !== null;
    const isValidPosition =
      position !== '' && position !== undefined && position !== null;
    const isValidDepartment =
      department !== '' && department !== undefined && department !== null;

    if (
      !isValidName ||
      !isValidSalary ||
      !isValidPosition ||
      !isValidDepartment ||
      salary < 0
    ) {
      throw new Error('Invalid input!');
    }

    let newEmployee = {
      name,
      salary,
      position: position,
    };

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }

    this.departments[department].push(newEmployee);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let bestDepartment;
    let bestSalary = 0;

    Object.entries(this.departments).forEach(([k, v]) => {
      let avrgSalary = v.reduce((acc, e) => acc + e.salary, 0) / v.length;

      if (avrgSalary > bestSalary) {
        bestDepartment = k;
        bestSalary = avrgSalary;
      }
    });

    const result = [
      `Best Department is: ${bestDepartment}\nAverage salary: ${bestSalary.toFixed(
        2
      )}`,
    ];
    Object.values(this.departments[bestDepartment])
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .forEach((e) => {
        result.push(`\n${e.name} ${e.salary} ${e.position}`);
      });
    return result.join('');
  }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
