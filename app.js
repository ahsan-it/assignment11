// ? Chapter 26-30
// ! Ans 01
function getUserInput() {
var userInput = prompt("Enter a positive integer:");
return parseInt(userInput); 
}

function main() {
var userInput = getUserInput();
if (isNaN(userInput) || userInput <= 0) {
document.write("Invalid input. Please enter a positive integer.");
return;
}
document.write("<h2>Number Manipulation</h2>");
document.write("a. Number: " + userInput + "<br>");
document.write("b. Round off value: " + Math.round(userInput) + "<br>");
document.write("c. Floor value: " + Math.floor(userInput) + "<br>");
document.write("d. Ceil value: " + Math.ceil(userInput) + "<br>");
}

main();
// ! Ans 02
function getUserInput() {
var userInput = parseFloat(prompt("Enter a negative floating-point number:"));
return userInput;
}
function main() {
var userInput = getUserInput();
if (isNaN(userInput) || userInput >= 0) {
document.write("Invalid input. Please enter a negative floating-point number.");
return;
}
document.write("<h2>Number Manipulation</h2>");
document.write("a. Number: " + userInput + "<br>");
document.write("b. Round off value: " + Math.round(userInput) + "<br>");
document.write("c. Floor value: " + Math.floor(userInput) + "<br>");
document.write("d. Ceil value: " + Math.ceil(userInput) + "<br>");
}

main();
// ! Ans 03
function getUserInput() {
var userInput = parseFloat(prompt("Enter a number:"));
return userInput;
}
function main() {
var userInput = getUserInput();
if (isNaN(userInput)) {
document.write("Invalid input. Please enter a valid number.");
return;
}
var absoluteValue = Math.abs(userInput);
document.write("<h2>Absolute Value</h2>");
document.write("The absolute value of " + userInput + " is " + absoluteValue);
}

main();
// ! Ans 04
function rollDice() {
return Math.floor(Math.random() * 6) + 1;
}
function main() {
var diceValue = rollDice();
document.write("<h2>Dice Roll</h2>");
document.write("The dice rolled: " + diceValue);
}

main();
// ! Ans 05
function tossCoin() {
var randomValue = Math.random();
if (randomValue < 0.5) {
return "Heads";
} else {
return "Tails";
}
}
function main() {
var coinResult = tossCoin();
document.write("<h2>Coin Toss</h2>");
document.write("The coin landed on: " + coinResult);
}

main();
// ! Ans 06
function generateRandomNumber() {
return Math.floor(Math.random() * 100) + 1;
}
function main() {
var randomNumber = generateRandomNumber();
document.write("<h2>Random Number</h2>");
document.write("The random number is: " + randomNumber);
}

main();
// ! Ans 07
function parseWeight(input) {
var regex = /(\d+(\.\d+)?)\s*(kgs?|kilograms?)/i;
var match = input.match(regex);
if (match && match.length >= 4) {
var weight = parseFloat(match[1]);
return weight;
} else {
return null; // Invalid input
}
}

function getUserWeight() {
var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
return userInput;
}

function main() {
var userInput = getUserWeight();
var weight = parseWeight(userInput);
if (weight !== null) {
document.write("<h2>User Weight</h2>");
document.write("Your weight is: " + weight + " kilograms");
} else {
document.write("Invalid input. Please enter your weight in a valid format.");
}
}

main();
// ! Ans 08
var secretNumber = Math.floor(Math.random() * 10) + 1;
function getUserInput() {
var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
return userInput;
}
function main() {
var userInput = getUserInput();
if (isNaN(userInput) || userInput < 1 || userInput > 10) {
alert("Please enter a valid number between 1 and 10.");
return;
}

if (userInput === secretNumber) {
alert("Congratulations! You guessed the secret number.");
} else {
alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}
}

main();
// ? Chapter 31-34
// ! Ans 01
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var formattedDate = day + "/" + month + "/" + year;
var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
document.write("<h2>Current Date and Time</h2>");
document.write("Date: " + formattedDate + "<br>");
document.write("Time: " + formattedTime);
// ! Ans 02
var currentDate = new Date();
var currentMonthNumber = currentDate.getMonth();
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var currentMonthName = monthNames[currentMonthNumber];
alert("The current month is " + currentMonthName + ".");
// ! Ans 03
var currentDate = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDayNumber = currentDate.getDay();
var currentDayName = dayNames[currentDayNumber];
alert("Today is " + currentDayName + ".");
// ! Ans 04
var currentDate = new Date();
var currentDayNumber = currentDate.getDay();
if (currentDayNumber === 6 || currentDayNumber === 0) {
alert("It's Fun day");
} else {
 alert("It's not Fun day");
}
// ! Ans 05
var currentDate = new Date();
var currentDayOfMonth = currentDate.getDate();
if (currentDayOfMonth < 16) {
alert("First fifteen days of the month");
} else {
alert("Last days of the month");
}
// ! Ans 06
var minutesSince1970 = Date.now() / (1000 * 60); 
console.log("Minutes since midnight, Jan. 1, 1970:", minutesSince1970);
// ! Ans 07
var currentTime = new Date();
var currentHour = currentTime.getHours();
if (currentHour < 12) {
alert("It's AM");
} else {
alert("It's PM");
}
// ! Ans 08
var laterDate = new Date(2020, 11, 31, 23, 59, 59);
console.log("The last day of the last month of 2020:", laterDate);
// ! Ans 09
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days passed since the start of Ramadan on June 18, 2015: " + daysPassed + " days.");
// ! Ans 10
var referenceDate = new Date('January 1, 2000');
var beginningOf2015 = new Date('January 1, 2015');
var timeDifference = beginningOf2015 - referenceDate;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("<h2>Seconds Elapsed</h2>");
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds.");
// ! Ans 11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("<h2>Date Object Modification</h2>");
document.write("Original Date and Time: " + currentDate + "<br>");
document.write("Modified Date and Time (1 hour ahead): " + currentDate);
// ! Ans 12
var currentDate = new Date();
var year100YearsAgo = currentDate.getFullYear() - 100;
currentDate.setFullYear(year100YearsAgo);
alert("Date reset to 100 years back: " + currentDate);
// ! Ans 13
function getUserAge() {
var userAge = parseInt(prompt("Enter your age:"));
return userAge;
}
function main() {
var userAge = getUserAge();
if (isNaN(userAge) || userAge <= 0) {
alert("Invalid age. Please enter a valid age.");
return;
}
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
document.write("<h2>Birth Year Calculation</h2>");
document.write("Your birth year is: " + birthYear);
}

main();
// ! Ans 14
function calculateBill() {
    var customerName = "John Doe";
    var currentMonth = "October";
    var numberOfUnits = 200; 
    var chargesPerUnit = 10.50; 
    var dueDate = new Date("2023-10-10");
    var latePaymentSurchargeRate = 0.05; 
    var netAmountPayable = numberOfUnits * chargesPerUnit;
    var currentDate = new Date();
    if (currentDate > dueDate) {
        var daysLate = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));
        var latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate * daysLate;
    } else {
        var latePaymentSurcharge = 0;
    }
    var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
    document.write("<h2>K-Electric Bill</h2>");
    document.write("Customer Name: " + customerName + "<br>");
    document.write("Current Month: " + currentMonth + "<br>");
    document.write("Number of Units: " + numberOfUnits + "<br>");
    document.write("Charges per Unit: $" + chargesPerUnit.toFixed(2) + "<br>");
    document.write("Net Amount Payable (within Due Date): $" + netAmountPayable.toFixed(2) + "<br>");
    document.write("Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "<br>");
    document.write("Gross Amount Payable (after Due Date): $" + grossAmountPayable.toFixed(2) + "<br>");
}

calculateBill();







