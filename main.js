// Variables
let name = "Faith";
let yearold = 20;
let isStudent = true;
let favoriteColors = ["blue", "black"];
let today = new Date();

console.log("Name:", name);
console.log("yearold:", age);
console.log("Student:", isStudent);
console.log("Colors:", favoriteColors);
console.log("Today:", today);

// ===== Task 7.2: Data Types & Operators =====

// ---- Exercise 1: Number Operations ----
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Increment/Decrement
let count = 0;
count++;
console.log("After increment:", count);
count--;
console.log("After decrement:", count);

// ---- Exercise 2: String Operations ----
let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log("Full Name (upper):", fullName.toUpperCase());
console.log("Full Name (lower):", fullName.toLowerCase());
console.log("First character of first name:", firstName.charAt(0));
console.log("Includes 'John'?", fullName.includes("John"));

// ---- Exercise 3: Comparison & Logical Operators ----
console.log("5 > 3:", 5 > 3);    
console.log("5 < 3:", 5 < 3);    
console.log("5 === 5:", 5 === 5);  
console.log("5 == '5':", 5 == "5"); // loose equality, avoid
console.log("5 !== 3:", 5 !== 3);  

// Logical operators
console.log("true && true:", true && true);   
console.log("true || false:", true || false);  
console.log("!true:", !true);          

// ---- Challenge: Age Calculations ----
let age = 20; // put your real age here
let ageInDays = age * 365;
let ageInHours = age * 365 * 24;

let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - age);

console.log("Age in days (approx.):", ageInDays);
console.log("Age in hours (approx.):", ageInHours);
console.log("Year you'll turn 100:", yearTurn100);

// ===== Task 7.3: Functions =====

// ---- Exercise 1: Function Declarations ----
function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

// ---- Exercise 2: Build These Functions ----
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    if (names.length < 2) return names[0][0]; // handle single name
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// ---- Exercise 3: Default Parameters ----
function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetDefault());            // Hello, Guest!
console.log(greetDefault("Alice"));     // Hello, Alice!
console.log(greetDefault("Bob", "Hi")); // Hi, Bob!

// ---- Build: Tip Calculator ----
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

// ---- Test Tip Calculator ----
console.log("Tip for 100:", calculateTip(100));         // 15
console.log("Tip for 200 at 10%:", calculateTip(200, 10)); // 20

// ===== Task 7.4: Control Flow =====

// ---- Exercise 1: If/Else Statements ----
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Test
console.log("Grade for 85:", getGrade(85)); // B

// ---- Exercise 2: Switch Statements ----
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

// Test
console.log("Day 3:", getDayName(3)); // Wednesday

// ---- Exercise 3: Loops ----

// For loop (0-4)
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}

// While loop (0-4)
 count = 0;
while (count < 5) {
    console.log("While loop:", count);
    count++;
}

// For...of loop with array
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("Color:", color);
}

// ---- Build Programs ----

// 1. Print numbers 1-100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// 3. FizzBuzz 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// 4. Triangle of stars
let rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}

// ===== Mini-Project: Calculator =====

// Basic operations
function addNumbers(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}

// Modulus
function modulus(a, b) {
    return a % b;
}

// Exponentiation
function power(a, b) {
    return a ** b;
}

// Main calculate function
function calculate(num1, operator, num2) {
    switch(operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

// ---- Test Cases ----
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error message
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8
console.log(calculate(10, "^", 2));   // Invalid operator

// ===== Task 8.1: Arrays =====

// ---- Exercise 1: Array Basics ----
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log("First fruit:", fruits[0]);  
console.log("Number of fruits:", fruits.length);

// Modifying arrays
fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start

console.log("Modified fruits array:", fruits);

// ---- Exercise 2: Array Methods ----
const nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(num => console.log("Doubled (forEach):", num * 2));

// map
const doubled = nums.map(num => num * 2);
console.log("Doubled (map):", doubled);

// filter
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find
const firstEven = nums.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// reduce
const sum = nums.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// includes
console.log("Includes 3?", nums.includes(3));

// ---- Build Tasks ----
const mixedNumbers = [5, -3, 12, 0, -7, 8];

// 1. Double all numbers
const doubledNumbers = mixedNumbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// 2. Filter out negative numbers
const positiveNumbers = mixedNumbers.filter(num => num >= 0);
console.log("Positive numbers:", positiveNumbers);

// 3. First number greater than 10
const firstOver10 = mixedNumbers.find(num => num > 10);
console.log("First number > 10:", firstOver10);

// 4. Product of all numbers
const product = mixedNumbers.reduce((total, num) => total * num, 1);
console.log("Product of all numbers:", product);

// ===== Task 8.2: Objects =====

// ---- Exercise 1: Object Basics ----
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log("First Name:", person.firstName);        
console.log("Last Name:", person["lastName"]);      
console.log("City:", person.address.city);          

// Modifying properties
person.age = 31;
person.email = "john@example.com";    // Add new property
delete person.isStudent;              // Remove property

console.log("Updated person object:", person);

// ---- Exercise 2: Object Methods ----
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log("Add 5 + 3:", calculator.add(5, 3));
console.log("Subtract 5 - 3:", calculator.subtract(5, 3));
console.log("Multiply 5 * 3:", calculator.multiply(5, 3));

// ---- Exercise 3: Object Iteration ----
const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log("Subjects:", Object.keys(scores));   
// Get values
console.log("Scores:", Object.values(scores)); 
// Get entries
console.log("Entries:", Object.entries(scores)); 

// Loop through entries
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// ===== Task 8.3: Array of Objects / Student Data =====

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log("Student Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("Student Charlie:", charlie);

// 4. Calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average Grade:", avgGrade.toFixed(2));

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Students sorted by grade:", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Any student grade > 90?", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("All students passing?", allPassing);


// ===== Mini-Project: Student Grade Tracker =====
const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const grades = Object.values(student.grades);
        const avg = grades.reduce((sum, g) => sum + g, 0) / grades.length;
        return avg;
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const allGrades = this.students
            .map(student => student.grades[subject])
            .filter(g => g !== undefined);
        if (allGrades.length === 0) return null;
        const avg = allGrades.reduce((sum, g) => sum + g, 0) / allGrades.length;
        return avg;
    },

    // Get top performer
    getTopStudent() {
        let top = null;
        let highestAvg = -Infinity;
        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAvg) {
                highestAvg = avg;
                top = student;
            }
        }
        return top ? top.name : null;
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";
        const grades = student.grades;
        const avg = this.getStudentAverage(name);
        const reportLines = [`Report Card for ${student.name}:`];
        for (const [subject, grade] of Object.entries(grades)) {
            reportLines.push(`${subject}: ${grade} (${this.getLetterGrade(grade)})`);
        }
        reportLines.push(`Average: ${avg.toFixed(2)} (${this.getLetterGrade(avg)})`);
        return reportLines.join("\n");
    }
};

// ---- Test the implementation ----
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("Alice's Average:", gradeTracker.getStudentAverage("Alice"));   // 91.67
console.log("Math Class Average:", gradeTracker.getSubjectAverage("math")); // 75.67
console.log("Top Student:", gradeTracker.getTopStudent());                 // Alice
console.log("Struggling Students:", gradeTracker.getStrugglingStudents()); // [Charlie]
console.log("\n" + gradeTracker.generateReportCard("Alice"));