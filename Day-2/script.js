// Task 1: Employee Registration

let empName = "Ashwinth"
const empId = "EMP3018"
let department = "Development"
let salary = 60000
let isPermanent = true

console.log(`
Employee Details
----------------
Name       : ${empName}
ID         : ${empId}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPermanent}
`);

//Task 2: Employee Skills

let skills = ["HTML", "CSS", "JavaScript", "MYSQL", "Java", "Git"]

console.log("First Skill : " + skills[0]);
console.log("Third Skill : " + skills[2]);
console.log("Last Skill : " + skills[skills.length - 1]);
console.log("Total Skills : " + skills.length);

//Task 3: Company Object

let company = {
    companyName: "Stackly IT",
    location: "Salem",
    employees: 1000,
    technologies: ["HTML", "CSS", "JavaScript", "MYSQL", "Java", "Git"]
}

console.log("Company Name : " + company.companyName);
console.log("Location : " + company.location);
console.log("Second Technology : " + company.technologies[1]);
console.log("Total Technologies : " + company.technologies.length);

//Task 4: Salary Calculator

let basicSalary = 30000
let bonus = 5000

let totalSalary = basicSalary + bonus
let tax = totalSalary * 10 / 100
let finalSalary = totalSalary - tax

console.log("Basic Salary :" + basicSalary);
console.log("Bonus :" + bonus);
console.log("Total Salary :" + totalSalary);
console.log("Tax :" + tax);
console.log("Final Salary :" + finalSalary);

//Task 5: Attendance Checker

let attendance = 92
let attStatus = attendance >= 75 ? console.log("Eligible for Exam") : console.log("Not Eligible");

//Task 6: Login Verification

let username = "admin"
let password = "12345"

let status = (username === "admin" && password === "12345") ? console.log("Login Successful") : console.log("Invalid Credentials");

//Task 7: Product Billing

let productName = "Laptop"
let productPrice = 45000
let quantity = 2

let totalBill = productPrice * quantity

console.log("Product : " + productName);
console.log("Price : " + productPrice);
console.log("Quantity : " + quantity);
console.log("Total : " + totalBill);

//Task 8: Increment & Decrement

let visitors = 100

console.log("Pre Increment:" + ++visitors) // Increments first to 101, then prints 101

console.log("Post Increment:" + visitors++) // Prints current value 101, then increments to 102

console.log("Pre Decrement:" + --visitors) // Decrements first to 101, then prints 101

console.log("Post Decrement:" + visitors--) // Prints current value 101, then decrements to 100

//Task 9: Comparison Checker

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(20 != "20"); // false
console.log(20 !== "20"); // true
console.log(5 < 10); // true
console.log(15 >= 20); // false
console.log(100 <= 100); // true

//Task 10: User Interaction

let employeeName = prompt("Enter Employee Name")
let employeeAge = prompt("Enter Employee Age")

let joinCompany = confirm("Do you want to join our company?")

joinCompany? alert(`Welcome ${employeeName}`): alert("Thank You");

//Final Challenge - Mini Employee Portal

//Employee Object

let employee = {
    empName: "Ashwinth",
    empId: "EMP3018",
    department: "Development",
    experience: 2,
    basicSalary: 40000,
    bonus: 5000,
    attendance: 92
}

let empCompany = {
    empCompany: "Stackly IT",
    location: "Salem",
}
//Skill Array 

let empskills = ["HTML", "CSS", "JavaScript", "MYSQL", "Java", "Git"]

//Salary Calculation

let totSalary = employee.basicSalary + employee.bonus

//Login Verfication

let empuser = prompt("Enter Username")
let pass = prompt("Enter Password")

let loginStatus = (empuser === "admin" && pass === "12345") ? "Success" : "Failed";

//Attendance Check
let examStatus = employee.attendance >= 75 ? "Eligible" : "Not Eligible";

//Experience Check
let expStatus = employee.experience >= 2 ? "Eligible for Promotion" : "Not Eligible for Promotion";

let loadPortal = confirm("Load Employee Portal?")

console.log(`
==============================
      EMPLOYEE PORTAL
==============================

Employee Name : ${employee.empName}
Employee ID   : ${employee.empId}
Department    : ${employee.department}
Experience    : ${employee.experience} Years
Salary        : ₹${employee.basicSalary}
Bonus         : ₹${employee.bonus}
Final Salary  : ₹${totSalary}
Skills        : ${empskills}
Attendance    : ${employee.attendance}%
Exam Status   : ${examStatus}
Login Status  : ${loginStatus}
Company       : ${empCompany.empCompany}
Location      : ${empCompany.location}

==============================
`)

alert("Portal Loaded Successfully")


// Bonus Task -> Library Management

alert("Welcome To Library Management!!")

//Login Verfication

let user = prompt("Enter the User Name: ")
let pwd = prompt("Enter the Password: ")

let isLoginValid = (user === "admin" && pwd ==="12345")? "Success" : "Failed";
console.log("Login Status : "+isLoginValid);

//Member Object 

let member = {
    memberId :"LIB00101",
    memberName : prompt("Enter the Member Name: "),
    memberEmail : prompt("Enter the Member Email-ID: "),
    membershipFee : 100,
    borrowedBooks: 0,
    daysLate: 0 
} 

//Books 

let books = [
    { id: 1, title: "HTML & CSS Master", author: "Jon Duckett", price: 500, copies: 3 },
    { id: 2, title: "Effective Java", author: "Joshua Bloch", price: 600, copies: 2 },
    { id: 3, title: "MySQL Complete Guide", author: "Paul DuBois", price: 700, copies: 1 },
    { id: 4, title: "JavaScript Basics", author: "John Doe", price: 800, copies: 4 },
    { id: 5, title: "Web Development", author: "Brad Frost", price: 900, copies: 2 }
];

console.log(`
Available Books
---------------
ID: 1  ${books[0].title} Author: ${books[0].author} Copies: ${books[0].copies}
ID: 2  ${books[1].title} Author: ${books[1].author} Copies: ${books[1].copies}
ID: 3  ${books[2].title} Author: ${books[2].author} Copies: ${books[2].copies}
ID: 4  ${books[3].title} Author: ${books[3].author} Copies: ${books[3].copies}
ID: 5  ${books[4].title} Author: ${books[4].author} Copies: ${books[4].copies}
`);

//Select Book to Borrow

let bookId = prompt("Enter the Book ID(1-5): ")

let isValidId = (bookId > 0 && bookId<=5)? true : false

let selectedBook = isValidId ? books[bookId-1]:{ id: 0, title: "Invalid", author: "N/A", price: 0, copies: 0 }

let isAvailable = selectedBook.copies>0?"Available" : "Not Available";
console.log("Available Status: "+isAvailable)



// Fees Calculation 

let membershipFees = member.membershipFee;
let borrowalFee = selectedBook.price;
let borrowDate = "2026-06-01";
let dueDate = "2026-06-10";
let returnDate = "2026-06-19";
let daysLate = 9;
let finePerDay = 10;
let fineAmount = daysLate * finePerDay;

let totalFees = membershipFees + borrowalFee + fineAmount;

const receipt = `

    ===========================================
        LIBRARY BOOK BORROW & RETURN RECEIPT   
    ===========================================


Login Details
-------------
Login Status        : ${isLoginValid}
Username            : ${user}

Member Information
------------------
Member ID           : ${member.memberId}
Member Name         : ${member.memberName}
Email               : ${member.memberEmail}

Book Details
------------
Book ID             : ${selectedBook.id}
Book Title          : ${selectedBook.title}
Author              : ${selectedBook.author}
Book Price          : ₹${selectedBook.price}
Availability        : ${isAvailable}
Copies Available    : ${selectedBook.copies}

Transaction Details
-------------------
Borrow Date         : ${borrowDate}
Due Date            : ${dueDate}
Return Date         : ${returnDate}
Days Late           : ${daysLate} days

Fees Calculation
----------------
Membership Fee      : ₹${membershipFees}
Book Rental Fee     : ₹${borrowalFee}
Late Fine           : ₹${fineAmount} 

-----------------------------------
TOTAL AMOUNT        : ₹${totalFees}

====================================
Status: Borrow Successfully!!
`;

let confirmBorrow = isValidId ? confirm("Borrow "+selectedBook.title+" ?") : false

let displayReceipt = confirmBorrow? console.log(receipt) : console.log("Borrow Cancelled. Thank You ")