// Task 1 : Employee Information System 

let empName = prompt("Enter Employee Name")
let empAge = prompt("Enter Employee Age")
let empDepartment = prompt("Enter Employee Department")
let empSalary = prompt("Enter Employee Salary")

let employee = {
    name: empName,
    age: empAge,
    department: empDepartment,
    salary: empSalary
}

console.log(`
        Employee Details
    -------------------------  
    Employee Name : ${employee.name}
    Employee Age  : ${employee.age}
    Employee Department : ${employee.department}
    Employee Salary : ${employee.salary}
    `)

if (empSalary > 30000) {
    console.log("Eligible for Bonus")
}
else {
    console.log("Not Eligible")
}

// Task 2 :  Supermarket Billing 

let productName = prompt("Enter Product Name")
let productPrice = prompt("Enter Product Price")
let quantity = prompt("Enter Quantity")

let totalBill = productPrice * quantity
let finalAmount;

if (totalBill > 5000) {
    finalAmount = totalBill - (totalBill * 10 / 100)
} else {
    finalAmount = totalBill
}

console.log("Final Amount: " + finalAmount)

// Task 3 : Student Result Portal

let studentName = prompt("Enter Student Name")

let studentMarks = prompt("Enter Marks")

if (studentMarks >= 90) {
    console.log("Grade A")
} else if (studentMarks >= 75) {
    console.log("Grade B")
} else if (studentMarks >= 50) {
    console.log("Grade C")
} else {
    console.log("Fail")
}

// Task 4 :  Bank ATM Eligibility

let userName = prompt("Enter User Name")

let accBalance = prompt("Enter Account Balance")

let withdrawalAmt = prompt("Enter Withdrawal Amount")

if (withdrawalAmt <= accBalance) {
    console.log("Transaction Successful")
} else {
    console.log("Insufficient Balance")
}

// Task 5 : Login Validation

let user = "admin";
let password = "12345";

let enteredUsername = prompt("Enter User Name")
let enteredPassword = prompt("Enter Password")

if (enteredUsername === user && enteredPassword === password) {
    console.log("Login Successful")
} else {
    console.log("Invalid Username or Password")
}

// Task 6 : Online Food Order

let foods = ["Pizza", "Burger", "Dosa", "Idli", "Biryani", "Pasta", "Noodles", "Parotta"]

console.log("First Item : " + foods[0])
console.log("Last Item : " + foods[foods.length - 1])
console.log("Total Number of Items : " + foods.length)

for (let item of foods) {
    console.log(item)
}

// Task 7 : Company Employee Directory

let employeeDetails = {
    name: "Ashwinth",
    age: "22",
    department: "Development",
    salary: "60000",
    experience: "2"
}

for (let key in employeeDetails) {
    console.log(key + " : " + employeeDetails[key])
}

// Task 8 :  Traffic Signal System

let signal = prompt("Enter Signal Color")

switch (signal) {

    case "Red": console.log("Stop"); break;
    case "Yellow": console.log("Ready"); break;
    case "Green": console.log("Go"); break;

    default: console.log("Invalid Signal");

}

// Task 9 : Age Category Checker

let age = prompt("Enter Your Age")

if (age >= 0 && age <= 12) {
    console.log("Child")
} else if (age >= 13 && age <= 19) {
    console.log("Teenager")
} else if (age >= 20 && age <= 59) {
    console.log("Adult")
} else {
    console.log("Senior Citizen")
}

// Task 10 :  Employee Attendance

let employeeName = prompt("Enter Employee Name")
let attendance = prompt("Enter Attendance (Present/Absent)")

console.log(`Welcome ${employeeName}`)

attendance === "Present" ? console.log("Attendance: Present") : console.log("Attendance: Absent")
