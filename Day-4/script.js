// Task 1 : Employee Management System

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
        name: "Ashwin",
        id: 103,
        salary: 40000
    }
];

for (let emp of employee) {
    console.log(emp);

    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    }
    else {
        console.log("Employee Not Eligible For Bonus");

    }
}

// Task 2 : Student Result Portal

let mark1 = prompt("Enter Mark 1")
let mark2 = prompt("Enter Mark 2")
let mark3 = prompt("Enter Mark 3")

let total = Number(mark1) + Number(mark2) + Number(mark3)
let percentage = total / 3

console.log("Total : " + total);
console.log("Percentage : " + percentage);

if (percentage >= 90) {
    console.log("Grade A+")
} else if (percentage >= 80) {
    console.log("Grade A")
} else if (percentage >= 70) {
    console.log("Grade B")
} else if (percentage >= 60) {
    console.log("Grade C")
} else {
    console.log("Fail")
}

// Task 3 : E-Commerce Cart

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 2000
    }
];

function calculateBill() {

    let totalBill = 0;

    for (let product of products) {
        totalBill = totalBill + product.price;
    }

    console.log("Total Bill : " + totalBill);

    if (totalBill > 5000) {

        let discount = totalBill * 10 / 100;
        let finalBill = totalBill - discount;

        console.log("Discount : " + discount);
        console.log("Final Bill : " + finalBill);

    } else {

        console.log("Final Bill : " + totalBill);

    }
}

calculateBill();

// Task 4 : Login Authentication

let username = "admin";
let password = "12345";

let enteredUser = prompt("Enter User Name")
let enteredPass = prompt("Enter Password")

let loginStatus = (enteredUser === username && enteredPass === password) ? "Login Success" : "Invalid Credentials";

console.log(loginStatus);

// Task 5 : Traffic Signal System

let signal = prompt("Enter Signal Color");

switch (signal) {

    case "Red": console.log(signal+" : Stop"); break;

    case "Yellow": console.log(signal+" : Ready"); break;

    case "Green": console.log(signal+" : Go"); break;

    default: console.log("Invalid Signal");
}

// Task 6 : ATM Withdrawal System

let accBalance = prompt("Enter Account Balance")

let withdrawAmount = prompt("Enter Withdrawal Amount")

if(withdrawAmount<=accBalance)
{
    console.log("Transaction Success");
}
else
{
    console.log("Transaction Failure");
}

// Task 7 : Online Food Order

function orderPlaced(callback) {
    console.log("Order Received");
    callback(foodDelivered)
}

function foodPreparing(callback) {
    console.log("Food Preparing");
    callback()
}

function foodDelivered() {
    console.log("Food Delivered");
}

orderPlaced(foodPreparing)

// Task 8 : Cashback Generator (Generator Function)

function* cashbackGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashbackGenerator()

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task 9 : Hospital Patient Check

let age = prompt("Enter Patient Age")

let weight = prompt("Enter Patient weight")

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}

// Task 10 : Final Mini Employee Portal

let empList = []
let empCount = 0
let empId = 1

// Add employee 

function addEmployee(eName, eDepartment, eSalary) {
    let employee = {
        empId: empId,
        empName: eName,
        empDept: eDepartment,
        empSal: eSalary
    }

    empList[empCount] = employee
    empCount++
    empId++
    return employee
}

// View Employee

function viewAllEmployees(callback) {
    for (let emp of empList) {
        callback(emp)
    }
}

// Calculate Bonus 

function calculateBonus(id, percentage, onSuccess, onError) {
    for (let emp of empList) {
        if (emp.empId === id) {
            if (emp.empSal > 50000) {
                let bonusSal = emp.empSal * percentage / 100
                onSuccess(emp, percentage, bonusSal)
            }
            else {
                onError(emp)
            }
        }
    }
}

// Search Employee By ID 

function searchEmployee(id, onFound, onNotFound) {
    let found = false
    for (let emp of empList) {
        if (emp.empId === id) {
            onFound(emp)
            found = true
            break
        }
    }
    if (found == false) {
        onNotFound(id)

    }
}

//Delete Employee

function deleteEmployee(id,onSuccess,onError) {
    let index = 0

    for (let i = 0; i < empCount; i++) {
        if (empList[i].empId === id) {
            index = i;
            break
        }
    }
    if (index >= 0) {
        for (let j = index; j < empCount - 1; j++) {
            empList[j] = empList[j + 1]
        }
        empCount--;
        onSuccess(id)
    } else {
        onError(id)
    }
}

//Update Salary

function updateSalary(id, newSalary, onSuccess, onError) {
    let foundEmp = false
    for (let emp of empList) {
        if (emp.empId === id) {
            let oldSal = emp.empSal
            emp.empSal = newSalary
            onSuccess(emp, newSalary,oldSal)
            foundEmp = true
            break
        }
    }

    if (foundEmp == false) {
        onError(id)
    }
}

// Total Employee Count 

function totalEmployeCount() {
    console.log("Total Employe Count : " + empCount);
}

// Call Back Fuctions

// view All EMployee

function displayEmployee(emp) {
    console.log(`
        ID: ${emp.empId}
        Name: ${emp.empName}
        Department: ${emp.empDept}
        Salary: ₹${emp.empSal}
    `)
}

// Bonus Success 

function onBonusSuccess(emp, percentage, bonusAmount) {
    console.log(`
           Bonus Calculated
        ----------------------   
        ID: ${emp.empId}
        Employee Name: ${emp.empName}
        Salary: ₹${emp.empSal}
        Bonus Percentage: ${percentage}%
        Bonus Amount: ₹${bonusAmount}
    `)
}

function onBonusError(emp) {
    console.log(`
         Bonus Not Eligible
        --------------------- 
        ID: ${emp.empId}
        Employee Name: ${emp.empName}
        Salary: ₹${emp.empSal}
        Status: Salary must be > 50000
    `)
}

// Search Employe

function onEmpFound(emp) {
    console.log("Employee Found")
    displayEmployee(emp)
}

function onEmpNotFound(id) {
    console.log(`Employee ID : ${id} Not Found`);
}

//Update Employee

function onSalUpdate(emp, newSalary,oldSal) {
    console.log(`
         Salary Updated
        -------------------
        Employee Name: ${emp.empName}
        Old Salary: ₹${oldSal}
        New Salary: ₹${newSalary}
        Increase: ₹${newSalary - oldSal}
    `)
}

function onSalError(id) {
    console.log(`Employee ID : ${id} Not Found`);
}

// Deleted Employee

function empDeleted(id) {
    console.log(`Employee ${id} Deleted SuccessFully`);
}

function empNotDeleted(id) {
    console.log(`Cannot Deleted Employee ID : ${id} Not Found `)
}

console.log("Mini Employee Portal");
console.log("------------------------");

// Add Employee 
addEmployee("Ashwin", "Developement", 60000)
addEmployee("Lokesh", "SAP", 50000)
addEmployee("John", "Testing", 40000)

console.log("View All Employee");
viewAllEmployees(displayEmployee)

console.log("Total Employee Count");
totalEmployeCount()

console.log("Calculate Bonus");
calculateBonus(1, 10, onBonusSuccess, onBonusError)

console.log("Search Employee");
searchEmployee(4, onEmpFound, onEmpNotFound)

console.log("Updated Employee");
updateSalary(1, 70000, onSalUpdate, onSalError)

console.log("Delete Employee");
deleteEmployee(2, empDeleted, empNotDeleted)

console.log("View All Employee After Delete");
viewAllEmployees(displayEmployee)

console.log("Employee Total Count");
totalEmployeCount()

















