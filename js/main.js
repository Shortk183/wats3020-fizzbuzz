/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


isInteger = false;

while(!isInteger) {
maxNumber = prompt('Enter a number over zero (must be an integer):', 20); 
 maxNUmber = parseInt(maxNumber);
if (Number.isSafeInteger(maxNumber) && maxNumber > 0 ) {
        isInteger = true;
    }
}

fbResults = [];

for (let i=1; i <= maxnumber; i++) {

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


fbText = '';
// TODO: Use a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.
for (let result of fbResults) {
    fbText = fbResult + "\n"; 
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
