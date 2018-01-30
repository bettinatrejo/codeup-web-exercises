"use strict";


//Q2
var i = 1;
while (i <= 32768) {
    console.log(i *= 2);
}


//Q3 ice cream
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var randomNumber = Math.floor(Math.random() * 5) + 1;


do {
    console.log(randomNumber);
    } while (allCones <= 0);

    if(allCones <= 0){
        console.log("Yay! I sold them all!");
    } else {

        if (allCones >= 5) {
            console.log( randomNumber + " cones sold..");
        }else if(allCones >= 0) {
            console.log("Cannot Sell you " + randomNumber +" cones I only have " + allCones)
        }
}


//instructor's example:



