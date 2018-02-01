// (function(){
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
//
//     var names = ["Allan", "Zoey", "Bo", "Bettina"];
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
//
//     console.log(names.length);
//
//
//
//
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */
//
//     console.log(names[0]);
//     console.log(names[1]);
//     console.log(names[2]);
//     console.log(names[3]);
//
//
//
//
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
//
//
//     for(var i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }
//
//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
//
//     names.forEach(function(element, index, array) {
//         console.log("Here is " + element + " at spot "+ index);
//     })
//
//
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//
//     var numbers = [1, 2, 3, 4, 5];
//     first(numbers);
//     second(numbers);
//     last(numbers);
//
//     function first(a) {
//         console.log(a[0]);
//     }
//
//     function second(a) {
//         console.log(a[1]);
//     }
//
//     function last(a) {
//         console.log(a[(numbers.length)-1]);
//     }
// })();
//
//
//
//
//
// /**BONUS EXERCISE*/
//
//
// // 1. Write a function called average(numbers) that takes in an array of numbers and returns the average


var numbers = [1,2,3,4];

function average(numbers) {
    var total = 0;

    for (var i = 0; i <= numbers.length -1; i++) {
       total += numbers[i] / numbers.length;
    }

        return total;
}

console.log(average(numbers));


//
// 2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.

function sumAll(numbers) {
    var total = 0;
    for (var i = 0; i <= numbers.length -1; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sumAll(numbers));



//
// 3. Write a function called max(numbers) that takes in an array of numbers and returns the largest

function max(numbers) {

}

//
// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest

function min(numbers) {

}

//
// 5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order

function reverseArray(array) {

}


//
// 6. Write a function called randomElement(array) that takes in an array and returns a random element

function randomElement(array) {

}


//
// 7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.

function upperCaseAll(array) {

}


//
// 8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.


function getOdds(array) {

}



//
// 9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers


function getEvens(array) {

}


//
// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers

function multiplyAll(array) {

}