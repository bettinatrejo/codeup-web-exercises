"use strict";



// Q2 Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.


    var oddNumber = prompt("Please insert an odd number between 1 & 50.")

do {
    input = prompt("please input a number b/w 1 or 50");
} while ((input > 50 || input <1) || isNaN(parseFloat(input)));

// Q3 Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

console.log("number to skip is " + input);

for(var i =1; i <=50; i++) {

    if(i % 2 == 0) {
    continue;
    }
   if(i == input) {
     console.log("Yikes! Skipping the number " + i);
      continue;
      }
           console.log("Here is an odd number " + i);

}



