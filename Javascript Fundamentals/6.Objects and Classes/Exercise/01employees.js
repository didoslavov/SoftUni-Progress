function employeeInfo(employees) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.number = personalNumber;
        }
    }

    for (const employee of employees) {
       const personalNumber = employee.length;
        const name = employee;
        const newEmployee = new Employee(name, personalNumber);
        
        console.log(`Name: ${newEmployee.name} -- Personal Number: ${newEmployee.number}`);
    }
}

employeeInfo([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);