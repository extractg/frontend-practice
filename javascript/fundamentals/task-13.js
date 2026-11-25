const employees = [
    { id: 1, name: "Anna", salary: 1200, active: true },
    { id: 2, name: "John", salary: 1500, active: true },
    { id: 3, name: "Mike", salary: 1800, active: false },
    { id: 4, name: "Kate", salary: 2000, active: true },
];

const updatedEmployees = employees.map((employee) =>
    employee.id === 2
        ? { ...employee, salary: employee.salary * 1.5 }
        : employee
);