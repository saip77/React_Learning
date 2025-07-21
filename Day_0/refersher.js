//Variables in JS
let book = "The Great Gatsby";
const author = "F. Scott Fitzgerald";

//Functions in JS
function printBook() {
  console.log(book);
}

//Arrow Functions in JS
const printAuthor = () => {
  console.log(author);
};

//Array Basics in JS
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements in an array
console.log(fruits[0]);

//Length of an array
console.log(fruits.length);

// Pushing elements in an array
fruits.push("Mango");
console.log(fruits);

// Popping elements in an array
fruits.pop();
console.log(fruits);

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Array methods
//for Each
fruits.forEach((fruit) => {
  console.log(fruit);
});
//Map
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);
//Filter
const filteredFruits = fruits.filter((fruit) => fruit !== "Apple");
console.log(filteredFruits);

//find
const index = fruits.find((fruit) => fruit === "Banana");
console.log(index);

// Destructuring
const [first, second, third] = fruits;
console.log(first, second, third);

// Objects in JS
const person = {
  name: "Sai Prasad",
  marks: 100,
  city: "Bangalore",
};