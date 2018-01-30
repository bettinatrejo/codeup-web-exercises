"use strict";
//example
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }



//Q2
// function showMultiplicationTable(input) {
//     for (var i = 1; i <= 10; i += 1) {
//           console.log(input + " x " + i + " = " + (input * i));
//           }
// }





// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...
//Q3



for (var i = 1; i < 10; i++) {
     //usually make this part below (randomnumbers) outside of it, but for this case it works
     var randomNumbers = Math.floor(Math.random() * 180) + 20;
     if (randomNumbers % 2 === 0) {
            console.log(randomNumbers + " is even");
        }   else {
            console.log(randomNumbers + " is odd");
        }
}









//  1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


//Q4 repeats a number the same amount of times; have to convert to a string in order to use that repeat function
// for (var i =1; i <= 9; i++) {
//     i = i.toString();
//     console.log(i.repeat(i));
// }


// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
// Q5 Create a for loop that uses console.log

for(var i = 100; i >= 5; i -=5) {
    console.log(i);
}