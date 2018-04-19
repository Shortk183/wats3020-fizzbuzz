/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


isInterger = false;

while(!isInterger) {
//In order for the maxNumber to be ligit we need to know
//1. It's an interger
//2. It's over zero

maxNumber = prompt('Enter a number over zero (must be an interger):', 20); 
 maxNUmber = parseInt(maxNumber);
if (Number.isSafeInteger(maxNumber) && maxNumber > 0 ) {
        isInterger = true;
    }
}
// `fbResults` variable to an empty Array
fbResults = [];
// TODO: Create a `for` loop that will execute the `maxNumber` of times.
for (let i=1; i <= maxnumber; i++) {
// TODO: Create logic inside the `for` loop to calculate FizzBuzz.  This will
// require the use of several conditional statements that use the `%` operator.
// Store the results of this logic in an array called `fbResults`.
    if (i % 15 == 0) {
        fbResults.push('FizzBuzz');
    }
    else if (i % 3 == 0) {
        fbResults.push('Fizz');
    }
    else if (i % 5 == 0 ) {
        fbResults.push('Buzz');
    }
    else {
        fbResults.push(i);
    }
}

// TODO: In preparation for creating the output text for your FizzBuzz results,
// initialize the `fbText` variable to an empty string.
fbText = "";
// TODO: Use a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.
for (let result of fbResults) {
    fbText + result + "\n"; 
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
