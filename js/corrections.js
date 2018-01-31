//this is a correction template for the assessment!!!


"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

//Q1
function isBoolean(input) {
    return typeof input == "boolean";
}


//ANSWER

// function isBoolean(input) {
//     return typeof input == "boolean";
// }




//Q2
function isNumeric(input) {
    if(isNaN(parseFloat(input))) {
        return false;
    } else {
        return true;
    }
}


//ANSWER
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }




//Q3

function isNegative(number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}


//ANSWER
// function isNegative(input) {
//     if(isNumeric(input)) {
//         return input < 0;
//     }
//     return false;
// }



//Q4 COME BACK
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}


//ANSWER
// function isPositive(input) {
//     return parseFloat(input) > 0;
// }


//Q5 come back
function isString(input) {
    if (!isNaN(parseFloat(input))) {
        return true;
    } else {
        return false;
    }
}



//ANSWER (STRING IS A DATA TYPE)
// function isString(input) {
//     return typeof input === "string";
// }



//Q6
function isArray(array) {
    return Array.isArray(array);
}



//ANSWER
// function isArray(array) {
//     return Array.isArray(array);
// }


//Q7
function increment(input) {
    if (input == "number") {
        return input + 1;
    } else {
        return false;
    }
}


//ANSWER
// function increment(input) {
//     if (isNumeric(input)) {
//         return ++input;
//         } else {
//         return false;
//     }
// }





//Q8
function decrement(input) {
    if (input !== "number") {
        return false;
    } else {
        return parseFloat(input) - 1;
    }
}


//ANSWER
// function increment(input) {
//     if (isNumeric(input)) {
//         return --input;
//         } else {
//         return false;
//     }
// }



//Q9
function square(number) {
    if (isNumeric(number)) {
        return (number * number);
    } else {
        return false;
    }
}


//ANSWER ******Ternary Operator (Shorthand If/Else)******
// function square(input) {
//     return (isNumeric(input)) ? input * input : false;
// }





//Q10
function upperCase(string) {
    if (string) {
        return string.toUpperCase();
    } else if (string !== "boolean") {
        return false;
    }
}



//ANSWER
// function upperCase(input) {
//     if (isString(input) && !isNumeric(input)) {
//         return input.toUpperCase();
//     }
//     return false;
//         return (isString(input) && !isNumeric(input)) ? input.toUpperCase() : false;
// }



//Q11
function isPalindrome(input) {
    return typeof input == "boolean";
}


//*****ANSWER******
// function isPalindrome(input) {
//     if (!isNumeric(input) && typeof input == "string") {
//         var lowerVal = input.toLowerCase();
//     //    this part reverses string
//         var reverseVal = lowerVal.split('').reverse().join()
//     } else {
//         return false;
//     }
// }


//Q12
function getHighestNumber(input) {
    return typeof input == "number";
}



//ANSWER
// function getHighestNumber(arg1, arg2, arg3) {
//   if (isNumeric(arg1) && isNumeric(arg2) && isNumeric(arg3)) {
//       if (arg 1 > arg 2 && arg1 > arg3) {
//           return arg1;
//       } else if (arg2 > arg1 && arg2 > arg3) {
//           return arg2;
//       } else {
//           return arg3;
//       }
//   } else {
//       return false;
//   }
// }





//Q13
function containsVowel(input) {

    if(input == "a" || input == "e" || input == "i" || input == "o" || input == "u" ) {
        return true;
    }
    else{
        return false;
    }


}



//ANSWER
// function containsVowel(input) {
//     if (typeof input !== "string" || isNumeric(input)) {
//         return false
//     } else {
//         return input.includes("a") || input.includes("e") || input.includes("i") || input.includes("o") || input.includes("u");
//     }
// }


//Q14
function add(a, b) {
    if (isNumeric(a, b)) {
        return (a + b);
    } else {
        return false;
    }
}


//ANSWER
// function add(arg1, arg2) {
//     if(isNumeric(arg1) && (isNumeric(arg2)) {
//         return parseFloat(Arg1) + parseFloat(arg2);
//     } else {
//         return false;
//     }
// }


//Q15
function multiply(a , b) {
    if (isNumeric(a, b)) {
        return (a * b);
    } else {
        return false;
    }
}



//ANSWER
// function add(arg1, arg2) {
//     if(isNumeric(arg1) && (isNumeric(arg2)) {
//         return parseFloat(Arg1) * parseFloat(arg2);
//     } else {
//         return false;
//     }
// }




//Q16
function sumOfSquares(a, b) {
    if (isNumeric(a, b)) {
        return ((a * a) + (b * b));
    } else {
        return false;
    }
}



//ANSWER
// function sumOfSquares(arg1, arg2) {
//     if (isNumeric(arg1) && isNumeric(arg2)) {
//         return square(arg1) + square(Arg2);
//     } else {
//         return false;
//     }
// }