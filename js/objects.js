(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var person =  {};
    person.firstName = "Bettina";
    person.lastName = "Trejo";

    console.log(person.firstName);
    console.log(person.lastName);





    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var person =  {};
    person.firstName = "Bettina";
    person.lastName = "Trejo";
    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }


    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // shopper $$ > $200 = 12%
    // Cameron $180
    // Ryan $250 (get 12% discount)
    // George $320 (get 12% discount)
    // need a line w/ name, amount before discount, the discount (if applicable)
    // and amount after discount
    // shoppers array
    // using a foreach loop for array

    // var discountAmount = (this.amount * .12);
    // var totalAmount = this.amount - discountAmount;





    shoppers.forEach(function(element, index, array) {
    var total = 0;
    var discount = 0;
        if (element.amount < 200) {
            console.log("Hey, " + element.name + " you owe $" + element.amount);
        } else if (element.amount > 200) {
            discount = element.amount * .12;
            total = element.amount - discount;
            console.log("Hey, " + element.name + " you got a discount of $" + discount + " and now owe, $" + total);
        }

    });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [

        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },

        {
            title: "BRAVE",
            author: {
                firstName: "Rose",
                lastName: "McGowan"
            }
        },


        {
            title: "Still Me",
            author: {
                firstName: "Jojo",
                lastName: "Moyes"
            }
        },

        {
            title: "Milk and Honey",
            author: {
                firstName: "Rupi",
                lastName: "Kaur"
            }
        }
    ];


console.log(books[1].title);
console.log(books[1].author.firstName);
console.log(books[1].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */




    // for (var i =0; i < books.length; i++) {
    //     var book = books[i];
    //     var title = book.title;
    //     var firstName = book.author.firstName;
    //     var lastName = book.author.lastName;
    //     console.log("This is book #: " + (i + 1));
    //     console.log("The title is: " + title);
    //     console.log("This book was written by: " + firstName + " " + lastName);
    //
    // }



    //another example:
    books.forEach(function(book, index) {
        var output = "";
        output += "Book # " + (index + 1) +"\n";
        output += "Title: " + book.title +"\n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName +"\n";
         console.log(output);
    });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     *
     */

    // var books = [];
    //
    // function createBook (title, author) {
    //     return {
    //         title: title,
    //         author: author
    //     }
    // }
    //
    // var book = createBook("We're All Mad Here", "Callie Newman");
    //
    // console.log("This book is called " + book.title + " and the author is " + book.author);
    //
    //
    //
    // function  showBookInfo ()




//
//
// var students = [];
//
//
//     function makeStudent(name, id, grade) {
//         return {
//             name: name,
//             id: id,
//             grade: grade
//         }
//     }
//
//     var student = makeStudent ("Zach", 1, 100);
//
//     console.log(student)

})();
