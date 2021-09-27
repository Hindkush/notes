// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 6));

function currying() {
    return function(b) {
        return function(c) {
            return b + c;
        }
    }
}

let sum = currying(); //currying transformation function
console.log(sum(6)(5)); //11

//Logging in JS
// INFO, DEBUG, ERROR

function log(printLog) {
    return function(type) {
        return function(date){
        return function(message) {
            printLog(type, date, message);
        }
    }
    }
}

function printLog(type, date, message) {
    console.log("Type of Log is - "+ type);
    console.log("Date is - "+ date);
    console.log("Message is - " +message);
} 

let curryedFunction = log(printLog);

let infoLog = curryedFunction('INFO')(new Date()); //prints information
let debugLog = curryedFunction('DEBUG')(new Date()); //print library info
let errorLog = curryedFunction('ERROR')(new Date()); //print errors

errorLog("Error occured");
infoLog("Hello Is printed");
debugLog("Connection Closed");