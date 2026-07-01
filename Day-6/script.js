// Task 1 : Find the Highest Salary

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let highestSal = employees[0]

employees.forEach((c, i, t) => {
    if (c.salary > highestSal.salary) {
        highestSal = c
    }
});
console.log("Highest Salary : " + highestSal.salary);
console.log("Employee Name : " + highestSal.name);

// Task 2 :  Find Employee by ID

let searchId = 103;
let foundEmployee = employees.find((c, i, t) => {
    return c.id === searchId;
});

if (foundEmployee) {
    console.log("Employee Found");
    console.log("Name : " + foundEmployee.name);
    console.log("Salary : " + foundEmployee.salary);
} else {
    console.log("Employee Not Found");
}

// Task 3 : Calculate Salary with Bonus

let bonus = 5000
employees.forEach((c, i, t) => {
    console.log(c.name + " : " + (c.salary + bonus));
});

// Task 4 : Experience Check

let employeeList = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];

employeeList.forEach((c, i, t) => {
    if (c.experience >= 5) {
        console.log(c.name + " - Senior Employee");
    } else {
        console.log(c.name + " - Junior Employee");
    }
});

// Task 5 : Display Only Employee Names

employees.forEach((c, i, t) => {
    console.log(c.name);
});

// Task 6 : Display Employee IDs

employees.forEach((c, i, t) => {
    console.log(c.id);
});

// Task 7 : Find Total Salary

let totalSalary = employees.reduce((acc, c) => {
    return acc + c.salary;
}, 0);

console.log("Total Salary : " + totalSalary);

// Task 8 : Employees Earning More Than ₹40,000

let salaryList = employees.filter((c, i, t) => {
    return c.salary > 40000;
});

salaryList.forEach((c, i, t) => {
    console.log(c.name);
});

// Task 9 : Increase Salary

let newSalary = employees.map((c, i, t) => {
    return {
        name: c.name,
        id: c.id,
        salary: c.salary + 5000
    }
});

newSalary.forEach((c, i, t) => {
    console.log(c.name + " : " + c.salary);
});

// Task 10 :  Employee Report

employees.forEach((c, i, t) => {
    console.log(`
Employee Name : ${c.name}
Employee ID : ${c.id}
Salary : ${c.salary}
`);
});

//Challenge Task

let employee = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

// Total Employees

console.log("Total Employees : " + employee.length);

// Highest Salary

let highestSalary = employee[0]

employee.forEach((c, i, t) => {
    if (c.salary > highestSalary.salary) {
        highestSalary = c;
    }
}); 

console.log("Highest Salary : " + highestSalary.salary);

// Lowest Salary

let lowestSalary = employee[0]

employee.forEach((c, i, t) => {
    if (c.salary < lowestSalary.salary) {
        lowestSalary = c;
    }
});

console.log("Lowest Salary : " + lowestSalary.salary);

// Total salary of all employees

let totalSal = employee.reduce((acc, c) => {
    return acc + c.salary;
}, 0);

console.log("Total Salary of all Employees : " + totalSal); 

// Employee earning the highest salary

console.log("Employee with Highest Salary : " + highestSalary.name);

// Employee earning the lowest salary

console.log("Employee with Lowest Salary : " + lowestSalary.name);

// Employees whose salary is greater than ₹40,000

let salaryEmp = employee.filter((c, i, t) => {
    return c.salary > 40000;
});

console.log("Employees earning more than ₹40,000 : ");

salaryEmp.forEach((c) => {
    console.log(c.name);
});

// Search an employee by ID

let empId = Number(prompt("Enter Employee ID to search : "));

let empFound = employee.find((c, i, t) => {
    return c.id == empId;
});

if (empFound) {
    console.log("Employee found : " + empFound.name);
} else {
    console.log("Employee not found");
}

// Add ₹5,000 bonus to every employee and display the new salary 

let bonusSal = employee.map((c, i, t) => {
    return {
        name: c.name,
        id: c.id,
        salary: c.salary + 5000
    }
});

console.log("New Salary after adding ₹5,000 bonus : "); 

bonusSal.forEach((c) => {
    console.log(c.name + " : " + c.salary);
}); 


// Print a professional employee report using template literals

console.log("Professional Employee Report:");
console.log("==============================");

employee.forEach((c) => {
    console.log(`
Employee Name : ${c.name}
Employee ID : ${c.id}
Salary : ${c.salary}
    `);
});
