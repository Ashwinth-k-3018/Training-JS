// Task 1 : Student Management System

let students = [
    {
        name: "Naveen",
        id: 101,
        mark: 85
    },
    {
        name: "John",
        id: 102,
        mark: 45
    },
    {
        name: "Arun",
        id: 103,
        mark: 25
    }
];

// Print all students
console.log("All Students:");
students.forEach((c) => {
    console.log(`
Name : ${c.name}
ID : ${c.id}
Mark : ${c.mark}        
`);
});

// Print only student names
students.forEach((c) => {
    console.log("Student Name : " + c.name);
});

// Find student ID 102.

let stdId = 102
let foundStudent = students.find((c) => {
    return c.id === stdId;
});

console.log("Found Student:");
if (foundStudent) {
    console.log(`
Name : ${foundStudent.name}
ID : ${foundStudent.id}
Mark : ${foundStudent.mark}        
`);
} else {
    console.log("Student Not Found");
}

// Print students who passed (mark >=35)

console.log("Students who passed: ");
let stdList = students.filter((c) => {
    return c.mark >= 35;
});

stdList.forEach((c) => {
    console.log(`
Name : ${c.name}
ID : ${c.id}
Mark : ${c.mark}        
`);
});

// Count total students
console.log("Total Students: " + students.length);

// Task 2 : Employee Salary System

let employees = [
    {
        name: "Naveen",
        salary: 30000
    },
    {
        name: "John",
        salary: 45000
    },
    {
        name: "Arun",
        salary: 60000
    }
];

// Find highest salary.

let highestSal = employees[0]

employees.forEach((c) => {
    if (c.salary > highestSal.salary) {
        highestSal = c;
    }
});

console.log("Employee with highest salary:");
console.log(`
    Name : ${highestSal.name}
    Salary : ${highestSal.salary}
`);

//Find lowest salary

let lowestSal = employees[0]

employees.forEach((c) => {
    if (c.salary < lowestSal.salary) {
        lowestSal = c;
    }
});

console.log("Employee with lowest salary:");
console.log(`
    Name : ${lowestSal.name}
    Salary : ${lowestSal.salary}
`);

// Add ₹5000 bonus

console.log("Salary After Bonus: ");

employees.forEach((c) => {
    console.log(`
        Name : ${c.name}
        Salary : ${c.salary + 5000}`);
});

// Print total salary

let totalSal = employees.reduce((acc, c) => {
    return acc + c.salary;
}, 0);

console.log("Total Salary of all employees: " + totalSal);

// Print employees earning above ₹40,000

console.log("Employees earning above ₹40,000:");
employees.forEach((c) => {
    if (c.salary > 40000) {
        console.log(`
            Name : ${c.name}
            Salary : ${c.salary}`);
    }
});

// Task 3 : Shopping Cart

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

// Print product names

products.forEach((c) => {
    console.log("Product Name : " + c.name);
});

// Print total bill 

let totalBill = products.reduce((acc, c) => {
    return acc + c.price;
}, 0);
console.log("Total Bill: " + totalBill);

// Search product "Mouse"

let productName = "Mouse";
let searchProduct = products.find((c) => {
    return c.name === productName;
}
);

if (searchProduct) {
    console.log("Product Found:");
    console.log(`
        Name : ${searchProduct.name}
        Price : ${searchProduct.price}`);
} else {
    console.log("Product Not Found");
}

// Apply 10% discount

products.forEach((c) => {
    let discountedPrice = c.price - (c.price * 10 / 100);
    console.log(`
        Name : ${c.name}
        Price after discount : ${discountedPrice}`);
});

// Print the final bill

let finalBill = products.reduce((acc, c) => {
    let discountedPrice = c.price - (c.price * 10 / 100);
    return acc + discountedPrice;
}, 0);
console.log("Final Bill after discount: " + finalBill);

// Task 4 : Bank Account

let account = {
    name: "Naveen",
    balance: 50000
}

// Deposit
account.balance = account.balance + 10000;

// Withdraw
account.balance = account.balance - 5000;

// Current Balance
console.log("Current Balance : " + account.balance);

// Balance Check
if (account.balance < 20000) {
    console.log("Low Balance");
} else {
    console.log("Balance Sufficient");
}

// Account Details

console.log(`
    Account Holder : ${account.name}
    Current Balance : ${account.balance}
`);

// Task 5 : Company Login

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === "admin" && password === "12345") {
    console.log("Welcome");
} else {
    console.log("Invalid Username or Password");
}

// Task 6 : Traffic Signal

let signal = prompt("Enter Signal (Red / Yellow / Green)");

switch (signal.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 7 : ATM Machine

let balance = 50000;

let choice = Number(prompt(`
1. Balance
2. Deposit
3. Withdraw
4. Exit

Enter your choice:
`));

switch (choice) {

    case 1:
        console.log("Current Balance : " + balance);
        break;

    case 2:
        let deposit = Number(prompt("Enter Deposit Amount"));
        balance = balance + deposit;
        console.log("Updated Balance : " + balance);
        break;

    case 3:
        let withdraw = Number(prompt("Enter Withdraw Amount"));

        if (withdraw <= balance) {
            balance = balance - withdraw;
            console.log("Updated Balance : " + balance);
        } else {
            console.log("Insufficient Balance");
        }

        break;

    case 4:
        console.log("Thank You");
        break;

    default:
        console.log("Invalid Choice");
}

// Task 8 : Cricket Score

let score = [10, 25, 40, 60, 80, 100];

// Highest Score

let highest = score[0];

score.forEach((c) => {
    if (c > highest) {
        highest = c;
    }
});

console.log("Highest Score : " + highest);

// Lowest Score

let lowest = score[0];

score.forEach((c) => {
    if (c < lowest) {
        lowest = c;
    }
});

console.log("Lowest Score : " + lowest);

// Total Score

let total = score.reduce((acc, c) => {
    return acc + c;
}, 0);

console.log("Total Score : " + total);

// Average Score

let average = total / score.length;

console.log("Average Score : " + average);

// Task 9 : Movie Ticket Booking

let age = Number(prompt("Enter Your Age"));

let confirmBooking = confirm("Do you want to book the ticket?");

if (confirmBooking) {

    if (age >= 18) {
        console.log("Movie Ticket Booked");
    } else {
        console.log("Not Allowed");
    }

} else {
    console.log("Booking Cancelled");
}

// Task 10 : Hospital Appointment

let token = Number(prompt(`
Enter Token

1. Doctor A
2. Doctor B
3. Doctor C
`));

switch (token) {

    case 1:
        console.log("Appointment with Doctor A");
        break;

    case 2:
        console.log("Appointment with Doctor B");
        break;

    case 3:
        console.log("Appointment with Doctor C");
        break;

    default:
        console.log("Invalid Token");
}

// Task 11 : Array Method Practice

let fruits = ["Apple", "Orange", "Banana"]

console.log(fruits);

//push()

fruits.push("Grape");
console.log("After Push : ");
console.log(fruits);

//pop()

fruits.pop();
console.log("After Pop : ");
console.log(fruits);

// shift()

fruits.shift();
console.log("After Shift : ");
console.log(fruits);

// unshift()

fruits.unshift("Mango");
console.log("After Unshift : ");
console.log(fruits);

// splice()

//Add 
fruits.splice(1, 0, "Pineapple");
console.log("After Splice : ");
console.log(fruits);

// Remove
fruits.splice(1, 1);
console.log("After Splice : ");
console.log(fruits);

// replace
fruits.splice(1, 1, "Papaya");
console.log("After Splice : ");
console.log(fruits);

// slice()

let newFruits = fruits.slice(1, 3);
console.log("After Slice : ");
console.log(newFruits);

// Task 12 : Higher Order Methods

let employee = [
    {
        name: "A",
        salary: 20000
    },
    {
        name: "B",
        salary: 35000
    },
    {
        name: "C",
        salary: 50000
    },
    {
        name: "D",
        salary: 70000
    }
];

// Map()

let bonusSalary = employee.map((c) => {
    return {
        name: c.name,
        salary: c.salary + 5000
    };
});

console.log("Salary After Bonus");
bonusSalary.forEach((c) => {
    console.log(c.name + " : " + c.salary);
});

// filter()

let highSalary = employee.filter((c) => {
    return c.salary > 30000;
});

console.log("Salary Greater than 30000");
highSalary.forEach((c) => {
    console.log(c.name);
});

// find()

let empFound = employee.find((c) => {
    return c.salary === 50000;
});

console.log("Employee Salary 50000");
console.log(empFound);

// reduce()

let totSal = employee.reduce((acc, c) => {
    return acc + c.salary;
}, 0);

console.log("Total Salary : " + totSal);

// some()

let checkSalary = employee.some((c) => {
    return c.salary > 60000;
});

console.log("Any Salary Above 60000 : " + checkSalary);

// every()

let allSalary = employee.every((c) => {
    return c.salary > 15000;
});

console.log("Every Employee Above 15000 : " + allSalary);

// Task 13 : String Practice

let company = " Stackly IT ";

console.log("Original : " + company);

console.log("Uppercase : " + company.toUpperCase());

console.log("Lowercase : " + company.toLowerCase());

console.log("Trim : " + company.trim());

console.log("Replace : " + company.replace("IT", "Software"));

console.log("Includes : " + company.includes("Stackly"));

console.log("Split : ");
console.log(company.trim().split(" "));

// Task 14 : Digital Clock

let clock = setInterval(() => {

    let currentTime = new Date();

    console.log(currentTime.toLocaleTimeString());

}, 1000);

setTimeout(() => {

    clearInterval(clock);

    console.log("Clock Stopped");

}, 10000);

// Task 15 :Fake Store API

let api = "https://fakestoreapi.com/products";

fetch(api).then((response) => {
    return response.json();
})

    .then((products) => {

        console.log("Product Titles");

        products.forEach((c) => {
            console.log(c.title);
        });

        console.log("Prices");

        products.forEach((c) => {
            console.log(c.price);
        });

        let costlyProducts = products.filter((c) => {
            return c.price > 100;
        });

        console.log("Products Above 100");

        costlyProducts.forEach((c) => {
            console.log(c.title);
        });

        console.log("Total Products : " + products.length);

        console.log("Categories");

        products.forEach((c) => {
            console.log(c.category);
        });

    })

    .catch((error) => {
        console.log(error);
    });

// // Employee Payroll System

let emp = [
    {
        id: 101,
        name: "Naveen",
        salary: 30000
    },
    {
        id: 102,
        name: "John",
        salary: 45000
    },
    {
        id: 103,
        name: "Arun",
        salary: 60000
    },
    {
        id: 104,
        name: "Ravi",
        salary: 25000
    }
];

// View Employees

function viewEmployees() {

    console.log("Employee List");
    console.log("----------------");

    emp.forEach((c) => {
        console.log(`
            ID: ${c.id} 
            Name: ${c.name} 
            Salary: ${c.salary}
        `);
    });
}

// Search Employee By ID

function searchEmployeeById(id) {
    let employee = emp.find((c) => {
        return c.id === id;
    });
    if (employee) {
        console.log("Employee Found");
        console.log(`
            ID: ${employee.id} 
            Name: ${employee.name} 
            Salary: ${employee.salary}
        `);
    } else {
        console.log("Employee Not Found");
    }
}

// Add Bonus

function addBonus() {
    let bonus = Number(prompt("Enter Bonus Amount"));
    let bonusSalary = emp.map((c) => {
        return {
            id: c.id,
            name: c.name,
            salary: c.salary + bonus
        };

    });
    console.log("Salary After Bonus");
    bonusSalary.forEach((c) => {
        console.log(c.name + " : " + c.salary);
    });
}

// Highest Salary
function highestSalary() {
    let highest = emp[0];
    emp.forEach((c) => {
        if (c.salary > highest.salary) {
            highest = c;
        }
    });
    console.log("Employee Name : " + highest.name);
    console.log("Highest Salary : " + highest.salary);
}

// Lowest Salary

function lowestSalary() {
    let lowest = emp[0];
    emp.forEach((c) => {
        if (c.salary < lowest.salary) {

            lowest = c;

        }
    });
    console.log("Employee Name : " + lowest.name);
    console.log("Lowest Salary : " + lowest.salary);
}

// Total Salary

function totalSalary() {
    let total = emp.reduce((acc, c) => {
        return acc + c.salary;
    }, 0);

    console.log("Total Salary : " + total);
}

// Salary Above 40000

function salaryAbove() {
    let highEarners = emp.filter((c) => {
        return c.salary > 40000;
    });

    console.log("Employees with Salary Above 40000");
    highEarners.forEach((c) => {
        console.log("Employee Name : " + c.name);
        console.log("Salary : " + c.salary);
    });
}

// Employee Report


function employeeReport() {

    console.log("Employee Report");
    console.log("----------------");

    emp.forEach((c) => {
        console.log(`
            Employee Name : ${c.name}
            Employee ID : ${c.id}
            Salary : ${c.salary}
        `);
    });
}

// Current Date & Time

function showDateTime() {
    let now = new Date();
    console.log("Current Date & Time : " + now);
}

// Fetch Employee Data

function fetchEmployees() {

    let empApi = "https://fakestoreapi.com/users";

    fetch(empApi).then((response) => {
        return response.json();
    })

        .then((data) => {

            console.log("Employee Details");
            console.log("--------------------------");

            data.forEach((c) => {

                console.log(`
                Name : ${c.name.firstname} ${c.name.lastname}
                Email : ${c.email}
                Username : ${c.username}
            `);
            });
        })
        .catch((error) => {
            console.log(error);
        });

}

// Exit 

console.log("========== Employee Payroll System ==========");

let choices = Number(prompt(`
1. View Employees
2. Search Employee by ID
3. Add Bonus
4. Find Highest Salary
5. Find Lowest Salary
6. Calculate Total Salary
7. Filter Salary Above ₹40,000
8. Print Employee Report
9. Display Current Date & Time
10. Fetch Employee Data from API
11. Exit

Enter your choice:
`));

switch (choices) {

    case 1:
        viewEmployees();
        break;

    case 2:
        let id = Number(prompt("Enter Employee ID"));
        searchEmployeeById(id);
        break;

    case 3:
        addBonus();
        break;

    case 4:
        highestSalary();
        break;

    case 5:
        lowestSalary();
        break;

    case 6:
        totalSalary();
        break;

    case 7:
        salaryAbove();
        break;

    case 8:
        employeeReport();
        break;

    case 9:
        showDateTime();
        break;

    case 10:
        fetchEmployees();
        break;

    case 11:
        console.log("Thank you! Exiting Employee Payroll System...");
        break;

    default:
        console.log("Invalid Choice");
}