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



/* ........................ problem -7 : Find the average ........................... */

const mySub = [100, 100, 100, 100, 100];

function average(arrOfMarks){
    let sum = 0;
    for(let i = 0; i < arrOfMarks.length; i++){
        const element = arrOfMarks[i];
        sum += element;
    }
    let averageMark = sum / arrOfMarks.length;
    if(averageMark % 1 != 0){
        let roundedFloatMark = parseFloat(averageMark.toFixed(2));
        return roundedFloatMark;
    } else {
        return averageMark;
    }
}
const myAverageNumber = average(mySub);
console.log(myAverageNumber);


/* ......................... problem - 8 : String Operation ....................... */

function stringCombine(str1, str2){
  return str1 + " " + str2;
}
let str1 = "i am going to be";
let str2 = "an awesome web developer";
console.log(stringCombine(str1, str2));


/* .......................... problem - 9 : Conditional Statements: Switch ................... */

function getLetter(s){
  let letter;
  const firstLetter = s.charAt(0);
  if(s.length >= 1 && s.length <=100){
      switch (firstLetter) {
          case "a": case "e": case "i": case "o": case "u":
              letter = "A";
              break;
          case "b":case "c":case "d":case "f":case "g":
              letter = "B";
              break;
          case "h":case "j":case "k":case "l":case "m":
              letter = "C";
              break;
          default:
              letter = "D";
              break;
      }
  }
  return letter;
}
console.log(getLetter("jdfgt"));


/* ....................... problem 10 : Remainder Operation ....................................... */ 

function findRemainder(mod){
  const remainder = mod % 5;
  return remainder;
}
console.log(findRemainder(119));


/* ............................... problem 11 : Can you find out who will get the delicious cake? (Part I)............... */

function JimOrDela(marksOfJim, marksOfDela) {
  if (marksOfJim > marksOfDela) {
    return "Jim";
  } else {
    return "Dela";
  }
}
console.log(JimOrDela(84, 75));


/* ........................ problem 12 : Can you find out who will get the delicious cake? (Part II) ................ */

function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku ){
  if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku){
      return "Jim";
  } else if (marksOfDela > marksOfJim && marksOfDela > marksOfChinku){
      return "Dela";
  } else{
      return "Chinku";
  }
}
console.log(JimOrDelaOrChinku(84,99,77));


/* ........................ problem 13 : What's my grade??.................................. */

function findGrade(marks){
  if(marks < 100 && marks >= 80){
      return "A";
  } else if (marks >=60){
      return "B";
  } else if (marks >= 50){
      return "C";
  } else if (marks >=40){
      return "D";
  } else {
      return "F";
  }
}
console.log(findGrade(95));


/* ....................... problem 14 : What is Jerry’s final score?............................ */

function finalScore(scores) {
  let score = 0;
  for (let i = 0; i < scores.length; i++) {
    score += scores[i];
  }
  return score;
}
const myScore = [20, 13, 37];
console.log(finalScore(myScore));


/* ...........................problem 15 : Find the largest number.................................... */

function findMax(arr){
  let maxNumber = arr[0];
  for(let i = 0; i < arr.length; i++){
      const element = arr[i];
      if(element > maxNumber){
          maxNumber = element;
      }
  }
  return maxNumber;
}
const myLargArray = [55, 10, 95];
console.log(findMax(myLargArray));


/* ........................ problem 16 : Is it Isosceles??.......................... */

function checkTriangle(side1, side2, side3){
  if(side1 === side2 && side1 === side3){
      return "No";
  }else if(side1 === side2 || side1 === side3){
      return "Yes";
  } else {
      return "No";
  }
}
console.log(checkTriangle(8,8,8));


/* ...................... problem 17 : Who is the tallest?........................... */

function tallestFriend ( height ){
  let tallest = [0];
  for(let i = 0; i < height.length; i++){
      const element = height[i];
      if(element > tallest){
          tallest = element;
      }
  }
  return tallest;
}
const myHeights = [157, 134, 188];
console.log(tallestFriend(myHeights));


/* ................................ problem 18 : Convert Hour to Minute...................... */

function hourToMin(hour){
  const minutes = hour * 60;
  return minutes;
}
console.log(hourToMin(2));


/* ........................... problem 19 : Write a code to find the smallest element of the array............ */

function findingSmallest ( numbers ) {
  let smallest = numbers[0];
  for(let i = 0; i < numbers.length; i++){
      const element = numbers[i];
      if(element < smallest){
          smallest = element;
      }
  }
  return smallest;
}
const smallestArray = [10,35,5,99,6];
console.log(findingSmallest(smallestArray));


/* ...................... problem 20 : Can you find the leap years??............... */

function findLeapYear(arrOfYears) {
  const leapYear =[];
  for(let i = 0; i < arrOfYears.length; i++){
      const element = arrOfYears[i];
      if((element % 400 === 0) || ((element % 4 === 0 ) && (element % 100 !== 0))){
          leapYear.push(element);
      }
  }
  return leapYear;
}
const myYears = [2023,2024,2025,2028,2030];
console.log(findLeapYear(myYears));


/* ............................ problem 21 : What are the odds??........................ */

function findOddSum(arrOfNumbers){
  let sum  = 0 ;
  for(let i = 0; i < arrOfNumbers.length; i++){
      const element = arrOfNumbers[i];
      if(element % 2 !== 0){
          sum += element;
      }
  }
  return sum;
}
const myOddNums = [5, 7, 8, 10, 45, 30];
console.log(findOddSum(myOddNums));



/* ........................ problem 22 : Find the second largest........................ */

function secondLargest ( numbers ){
  const large = [];
  for(let i = 0; i < numbers.length; i++){
      numbers.sort(function(a,b){
          return b-a;
      });
      large.push(numbers[i]);
  }
  return large[1];
}
const secLarge = [10,33,99,5,5,99,6];
console.log(secondLargest(secLarge));


/* ........................ problem 23 : Find the area of a rectangle.................. */

function findArea( length, width ){
  const area = length * width;
  return area;
}
console.log(findArea(10,5));


/* .................... problem 24 : Count the number of all zero...................... */

function countZeros ( binary_num ){
  let binary_nums = Array.from(String(binary_num));
  const binZero = [];
  for(let i = 0; i < binary_nums.length; i++){
      const element = binary_nums[i];
      // console.log(element);
      if(element == 0){
          binZero.push(element);
      }
  }
  return binZero.length;
}
console.log(countZeros(10101));

/* ............................ problem 25 : হ্যালো ইউনিভার্স ......................... */

function helloUniverse(){
  return "Hello Universe!! Welcome me to JS World!!!"
}
