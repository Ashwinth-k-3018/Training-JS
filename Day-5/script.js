// Task 1 : Employee Salary

function yearlySalary(monthSalary) {
    return monthSalary * 12;
}

console.log("Yearly Salary : ₹" + yearlySalary(45000));

// Task 2 :  Student Pass or Fail

function checkResult(marks) {
    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkResult(72);

// Task 3 : Food Bill

function totalBill(price, quantity) {
    return price * quantity;
}

console.log("Total Bill : ₹" + totalBill(180, 3));

// Task 4 : Welcome Employee

function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

welcomeEmployee("Ashwinth", "Development");

// Task 5 : Shopping Discount

function finalAmount(price, discount) {
    return price - discount;
}

console.log("Final Amount : ₹" + finalAmount(5000, 500));

// Task 6 : Company Login

function dashboard() {
    console.log("Loading Dashboard...");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);

// Task 7 : Food Delivery

function orderPlaced(callback) {
    console.log("Order Received");
    callback(outForDelivery);
}

function foodPreparing(callback) {
    console.log("Preparing Food");
    callback(foodDelivered);
}

function outForDelivery(callback) {
    console.log("Out for Delivery");
    callback();
}

function foodDelivered() {
    console.log("Delivered");
}

orderPlaced(foodPreparing);

// Task 8 : Lucky Draw

function* luckyDraw() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = luckyDraw()

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 9 : Employee Bonus

function bonus(salary) {
    return function (extraBonus) {
        console.log("Total Salary : " + (salary + extraBonus));
    }
}

bonus(50000)(5000);

// Task 10 : Merge Employee Details

let employeePersonal = {
    name: "Ashwinth",
    age: 22
}

let employeeOffice = {
    department: "Development",
    salary: 50000
}

let emp = { ...employeePersonal, ...employeeOffice }

console.log(emp);

// Task 11 : Shopping Cart

let cart1 = ["Mobile", "Laptop", "Television"];
let cart2 = ["Mouse", "Keyboard", "Remote"];

let cart = [...cart1, ...cart2];

console.log(cart);

// Task 12 : Student Marks

function student(name, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total = total + mark;
    }

    let average = total / marks.length;

    console.log("Student : " + name);
    console.log("Total Marks : " + total);
    console.log("Average : " + average);

}

student("Naveen", 90, 85, 88, 95);

// Task 13 : Product Details

let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price } = product;

console.log("Name : " + name);
console.log("Price : " + price);

// Task 14 :  Customer Details

let customer = [102, "Ashwinth", "Chennai", 9839053145];

let [id, customerName, city] = customer;

console.log("ID : " + id);
console.log("Name : " + customerName);
console.log("City : " + city);

// Task 15 : Add Product

let products = ["Mobile", "Laptop"];

products.push("Headphone");

console.log(products);

// Task 16 : Remove Last Product

let cartItems = ["Mobile", "Laptop", "Headphone"];

cartItems.pop();

console.log(cartItems);

// Task 17 : Replace Employee

let employee = ["Rahul", "Arun", "John", "David"];

employee.splice(2, 1, "Naveen");

console.log(employee);

// Task 18 : Search Product

let productList = ["Mouse", "Keyboard", "Monitor", "Laptop"];

let result = productList.includes("Laptop");

console.log(result);

// Task 19 : Employee Ranking

let salaries = [25000, 45000, 30000, 70000];

salaries.sort(function (a, b) {
    return a - b;
});

console.log(salaries);

// Task 20 : Reverse Chat Messages

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();

console.log(messages);

// Mini Project: Employee Management System

// Employee Array

let employees = [
    {
        id: 101,
        name: "Ashwin",
        department: "Development",
        salary: 50000
    },
    {
        id: 102,
        name: "Lokesh",
        department: "Testing",
        salary: 40000
    }
]

// Add Employee

function addEmployee(id, name, department, salary) {
    let employee = {
        id: id,
        name: name,
        department: department,
        salary: salary
    }
    employees.push(employee)
    console.log("Employee Added Successfully")
}

// View Employees

function viewEmployees() {
    console.log("Employee List")
    console.log("---------------");
    for (let emp of employees) {
        console.log(emp)
    }
}

//Search Employee by ID

function searchEmployee(id) {
    let found = false
    for (let emp of employees) {
        if (emp.id === id) {
            console.log("Employee Found")
            console.log(emp)
            found = true
            break
        }
    }
    if (!found) {
        console.log("Employee Not Found")
    }
}

// Calculate Salary + Bonus

function calculateBonus(id, bonusAmount) {
    for (let emp of employees) {
        if (emp.id === id) {
            let totalSalary = emp.salary + bonusAmount
            console.log("Employee : " + emp.name)
            console.log("Salary : " + emp.salary)
            console.log("Bonus : " + bonusAmount)
            console.log("Total Salary : " + totalSalary)
        }
    }
}

// Remove Employee

function removeEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees.splice(i, 1)
            console.log("Employee Removed Successfully")
            break
        }
    }
}

// Sort Employees by Salary

function sortEmployeeSalary() {
    employees.sort(function(a, b) {
        return a.salary - b.salary
    })
    console.log("Employees Sorted By Salary")
    console.log(employees)
}

// Find Employee by Name

function findEmployee(name) {
    let found = false
    for (let emp of employees) {
        if (emp.name === name) {
            console.log("Employee Found")
            console.log(emp)
            found = true
            break
        }
    }
    if (!found) {
        console.log("Employee Not Found")
    }
}

// Display Employee Details using Destructuring

function displayEmployee(id) {
    for (let emp of employees) {
        if (emp.id === id) {
            let { name, department, salary } = emp
            console.log("Employee Details")
            console.log("Name : " + name)
            console.log("Department : " + department)
            console.log("Salary : " + salary)
        }
    }
}

console.log("Employee Management System");
console.log("--------------------------------------");

console.log("--- Add Employee ---")
addEmployee(103, "John", "HR", 45000)
 
console.log("--- View All Employees ---")
viewEmployees()
 
console.log("--- Search Employee ---")
searchEmployee(102)
 
console.log("--- Calculate Bonus ---")
calculateBonus(101, 5000)
 
console.log("--- Sort By Salary---")
sortEmployeeSalary()
 
console.log("--- Find By Name ---")
findEmployee("Ashwin")
 
console.log("--- Display With Destructuring ---")
displayEmployee(102)
 
console.log("--- Remove Employee ---")
removeEmployee(103)
 
console.log("--- Final Employee List ---")
viewEmployees()

