// === Array Bonuses ===
//
// 1. Write a function called average(numbers) that takes in an array of numbers and returns the average

function average(numbers) {
    var total = 0;
    numbers.forEach(function(input) {
        total += input;
    });
    return (total/numbers.length);
}



// function average(input) {
//     var total = 0;
//     input.forEach(function(input) {
//         total += input;
//     });
//     return (total/input.length);
// }
// console.log('The average of that array is ' + average([3, 45, 56, 78]));


// 2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.

function sumAll(numbers) {
    var total = 0;
    numbers.forEach(function (numbers) {
        total += numbers;
    });
    return (total + numbers.length);
}

// 3. Write a function called max(numbers) that takes in an array of numbers and returns the largest

function max(numbers) {
    return Math.max(numbers);
}

// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

Array.min = function( array ){
    return Math.min.apply( Math, array );
};


// 5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order

function reverseArray(array){
    return array.reverse();
}
console.log(reverseArray([1,2,3,4,5]));



// 6. Write a function called randomElement(array) that takes in an array and returns a random element

function randomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
}





// 7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.
function upperCaseAll(array){
    var upperCaseArray = [];
    for (var i = 0;i<array.length;i++){
        upperCaseArray.push(array[i].toUpperCase())
    }
    return upperCaseArray;
}
console.log(upperCaseAll(['this', 'is', 'a', 'test']));

// 8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.
function getOdds(array){
    var oddArray = [];
    for (var i = 0;i<array.length;i++){
        if (array[i]%2!==0){
            oddArray.push(array[i])
        }
    }
    return oddArray;
}
console.log(getOdds([1,2,3,4,5,6,7,8,9,10]));

// 9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers
function getEvens(array){
    var evenArray = [];
    for (var i = 0;i<array.length;i++){
        if (array[i]%2===0){
            evenArray.push(array[i]);
        }
    }
    return evenArray;
}
console.log(getEvens([1,2,3,4,5,6,7,8,9,10]));

// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers

function multiplyAll(array){
    var total = 1;
    for (var i = 0;i<array.length;i++){
        total *= array[i]
    }
    return total;
}
console.log(multiplyAll([2,3,4,5]));









// ================================= ARRAY MANIPULATION


// BONUS 1:
//
// Create a phone number parser that will convert a string of numbers into a human readable format.
// The output should depend on the number of digits (account for 7, 10, 11 digit numbers):

// function phoneNumberParser(input){
//     if (isNaN(input)){
//         console.log( 'Invalid Character Included')
//     }
//     var phoneNumber = input.toString();
//     var phoneNumberArray = phoneNumber.split ('');
//     if (phoneNumberArray.length === 7){
//         phoneNumberArray.splice(3,0,'-');
//     }
//     if (phoneNumberArray.length === 10){
//         phoneNumberArray.splice(3,0,'-');
//         phoneNumberArray.splice(7,0,'-');
//     }
//     if(phoneNumberArray.length === 11){
//         phoneNumberArray.splice(1,0,'-');
//         phoneNumberArray.splice(5,0,'-');
//         phoneNumberArray.splice(9,0,'-');
//     }
//     return phoneNumberArray.join('');
// }


// function numberParser(string) {
//     var phoneNumberArray = [];
//     if (typeof(parseFloat(string === "number")) && isFinite(string)) {
//         if (string.length === 7) {
//             phoneNumberArray = string.split("");
//             phoneNumberArray.splice(3, 0, "-");
//             phoneNumberArray = phoneNumberArray.join("");
//         } else if (string.length === 10) {
//             phoneNumberArray = string.split("");
//             phoneNumberArray.splice(3, 0, "-");
//             phoneNumberArray.splice(7, 0, "-");
//             phoneNumberArray = phoneNumberArray.join("");
//         } else if (phoneNumberArray === 11) {
//             phoneNumberArray = string.split("");
//             phoneNumberArray.splice(1, 0, "-");
//             phoneNumberArray.splice(5, 0, "-");
//             phoneNumberArray.splice(9, 0, "-");
//             phoneNumberArray = phoneNumberArray.join("");
//         } else {
//             return false;
//         }
//     } return phoneNumberArray;
//
// }


// Using multiple functions will be helpful.
// input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323



// Extra Challenge: account for invalid characters
// function phoneNumberParser(string_of_numbers) {
//
//
//     var arrayOfNumbers = string_of_numbers.split("");
//
//     for (var i = 0; i < arrayOfNumbers.length; i++) {
//         if (isNaN(parseFloat(arrayOfNumbers[i]))) {
//             return "Please remove invalid character and try again";
//         }
//     }
//     if (arrayOfNumbers.length == 7) {
//         arrayOfNumbers.splice(3,0, "-");
//     } else if (arrayOfNumbers.length == 11) {
//         arrayOfNumbers.splice(1, 0, "-");
//         arrayOfNumbers.splice(5, 0, "-");
//         arrayOfNumbers.splice(9, 0, "-");
//     } else {
//         return "The wrong number of numbers";
//     }
//
//     return arrayOfNumbers.join('');
//
// }



// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers
//
// BONUS 2:
//
// Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) Add a student name
// 2) Delete a student name
// 3) View all student names in alphabetical order
// 4) View all student names in reverse alphabetical order
// Store the student names in an array. Account for invalid user input.

//
// var intervalId = setInterval(ted, 0500);
//
// function ted() {
//
//     var random = Math.floor(Math.random()* 7) +1;
//
//     if (random === 1) {
//         document.bgColor = "#4cb931";
//     }
//
//     else if (random === 2) {
//         document.bgColor = "#554d98";
//     }
//
//     else if (random === 3) {
//         document.bgColor = "#F302F34";
//     }
//     else if (random === 4) {
//         document.bgColor = "#032F34";
//     }
//     else if (random === 5) {
//         document.bgColor = "#e84235";
//     }
//     else if (random === 6) {
//         document.bgColor = "#6e4711";
//     }
//     else if (random === 7) {
//         document.bgColor = "#37824a";
//     } else {
//         document.bgColor = "#6c3782";
//     }
// }


// function declareWinner(fighter1, fighter2, firstAttacker) {
//     var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
//     var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
//     if(fac1 < fac2) {
//         return fighter2.name;
//     } else if(fac2 < fac1) {
//         return fighter1.name;
//     } else {
//         return firstAttacker;
//     }
// }
