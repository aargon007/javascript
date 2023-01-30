// remove banana and add mango
var fruits = ["Apple", "Banana", "Orange"];
var indexOfBanana = fruits.indexOf("Banana");
fruits[indexOfBanana] = "Mango";

// remove orange and add watermelon
var indexOfOrange = fruits.indexOf("Orange");
fruits[indexOfOrange] = "Watermelon";
console.log(fruits);