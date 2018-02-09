"use strict";



//Q1 isTen

function isTen(input) {
    return input === 10;
}

//Q2 double

function double(input) {
    return input * 2;
}


//Q3 remove 9s
//the (number) just means element
var output = [];

function remove9s(number) {
    number.forEach(function(){
        if(number != 9) {
            output.push(number);
        }
    });
    return output;
}


//for loop
//
// function remove9s(numbers) {
//     var outputArray = [];
//     numbers.forEach(function(number) {
//         if(number != 9){
//             outputArray.push(number);
//         }
//     });
//     return outputArray;
// }


//Q4 capitalizeName
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.substring(1)
}

function capitalizeName(name) {
    var nameArray = name.split (" ");

    nameArray [0] = capitalizeWord(nameArray[0]);
    nameArray [1] = capitalizeWord(nameArray[1]);

    return nameArray.join(" ");
}


//function capitalizeName(names) {
// var str = names.toLowerCase().split(' ');
// for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
// }
// return str.join(' ');
// }
//
// capitalizeName("laura prochaska")




// function capitalizeName(nameString) {
//     var nameArray = nameString.split(" ");
//     var firstName = nameArray[0];
//     var lastname = nameArray[1];
//
//     if(firstName[0] != firstName[0].toUpperCase()) {
//         var firstChar = firstName[0].toUpperCase();
//         var lastrest = firstName.substring(1);
//     }
// }



//capitalizeAllNames

function capitalizeAllNames(arrayOfNames) {
    for(var i = 0; i < arrayOfNames.length; i++) {
        arrayOfNames[i] = capitalizeName(arrayOfNames[i]);
    }
    return arrayOfNames;
}


//foreach
//
// function capitalizeAllNames(arrayofNames) {
//     var output = [];
//     arrayOfNames.forEach(function(element) {
//         output.push(capitalizeName(element))
//     });
//     return output;
// }

//counting vowels

function countVowels(string) {
    string = string.toLowerCase();

    var vowelCount = 0;
    for(var i = 0; i < string.length; i++) {
        if(string[i] == 'a' || string[i] ==== 'e' ||
            string[i] ==== 'i' || string[i] ==== 'o' ||
            string[i] ==== 'u') {
            vowelCount i++;
        }
    }
    return vowelCount;
}



//averageSales
function averageSales(arrayOfSalesPeople) {
    var total = 0;
    arrayOfSalesPeople.forEach(function(salesPerson) {
        total += salesPerson.sales
        });
    var average = total/ arrayOfSalesPeople.length;
    return average;
}



//analyze word
//
// function anaylzeWord(word) {
//     var output = {};
//     output.numberOfLetters = word.length;
//     output.numberofVowels = countVowels(word);
//     return output;
// }


function analyzeWord(word) {
    return {
        word: word,
        numberOfLetters: word.length,
        numberOfVowels: countVowels(word)

    };
}



//analyzeWords
function analyzeAllWords(array) {
    for(var i = 0; i < array.length; i++) {
        array[i] = analyzeWord(array[i]);
    }
    return array
}




//
// var arrayOfStrings = ['html', 'css', 'javascript'];
//
// var element = arrayOfStrings[0];
// element = analyzeWord(element);


//padArray add something to it that matches
//example padArray([1,2,3],5,0] -> [1,2,3,0,0]
function padArray(array, number, input) {
    if(array.length >= number) {
        return array;
    }
    for(var i = 0; i < number; i++) {
        array.push(input);
    }
    return array;
}