const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


// PROBLEM 1 - create an array of the first letters of each fruit (use .map())

let firstLetters = fruits.map(fruit => fruit.charAt(0));
console.log(firstLetters);







// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)(use .map())

//
// let properties = customers.map(customer => {
//     return {name: customer.name, age: customer.age}});


let properties = customers.map(({ name, age }) => {
    return {
        name,
        age
    };
});
console.log(properties);




// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects(use .filter())


let civilArray = customers.filter(customer => {
    return customer.occupation === "Teacher" || customer.occupation === "Police Officer";
    });
console.log(civilArray);





// PROBLEM 4 - determine the average age of customers(use .reduce())

let average = customers.reduce((total, customer) => {
    return total + customer.age / customers.length;
},0);
console.log(average);



fetch