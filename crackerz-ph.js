// reverse word function
function reverseString(word) {
  return word.split("").reverse().join("");
}
console.log(reverseString("hello"));

//reverse text string function
function reverseStrings(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i++) {
    const element = text[i];
    reversed = reversed + element;
  }
  return reversed;
}

/* ................... problem - 2 : detect vowel and consonant ............................. */
function solution(letter) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return "VOWEL";
  } else {
    return "CONSONANT";
  }
}
console.log(solution("k"));

/* ........................... problem-3: calculate total cost ..................... */

const myArray = [
  { name: "milk", price: 500 },
  { name: "tea", price: 200 },
  { name: "sugar", price: 300 },
];
function totalCost(products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    totalPrice += product.price;
  }
  return totalPrice;
}
console.log(totalCost(myArray));

/* ................ problem - 4 : Delete a property from an object .................. */

const array1 = [{ fname: "john" }, "fname"];
const array2 = [{ lastName: "Mithila" }, "fname"];

function deleteProperty(arr) {
  let obKey = Object.keys(arr[0]).toString();
  console.log(obKey);
  if (obKey == arr[1]) {
    delete arr[0].obKey;
    return "YES";
  } else {
    return "NO";
  }
}
console.log(deleteProperty(array2));

/* .......................... problem - 5 : Convert temperature ....................... */

function temperatureConverter(valNum) {
  const celsius = (valNum - 32) / 1.8;
  if (celsius % 1 != 0) {
    let fractCelsius = celsius.toFixed(2);
    return parseFloat(fractCelsius);
  }
  return celsius;
}
console.log(temperatureConverter(103));

/* ......................... problem - 6 : Subtraction Operation.................... */
function subtraction(num1, num2) {
  //write your code here
  const givenMoney = num1;
  const costMoney = num2;
  const returnMoney = givenMoney - costMoney;
  //don't forget to write return
  return returnMoney;
}
console.log(subtraction(1000,700));



/* ........................ problem -7 :  */