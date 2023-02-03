//problem - 1:  print sorry 10 times
// for(let i = 0; i < 10; i++){
//     console.log("sorry!");
// }

/*  ............................... problem - 2: find odd even number .................... */

// function isEven(num){
//     if (num % 2 === 0){
//         return `${num} is a even number`;
//     } else {
//         return `${num} is a odd number`;
//     }
// }
// console.log(isEven(10));

/* ...................... problem - 3: sort an array  ................... */

// const myArray = [20, 15, 11, 1, 9, 3, 2, 4, 6, 5, 7, 10, 8, 12, 13, 16, 14, 19, 17, 18];
// myArray.sort(sortArray);

// function sortArray(a,b){
//     return a-b;
// }
// console.log(myArray);

/* ............................problem - 4 : check if a year is leapyear or not ............ */

// function isLeapYear(year){
//     if((year % 400 === 0) || ((year % 4 === 0 ) && (year % 100 !== 0))) {
//         console.log(`${year} is a leap year!`);
//     } else {
//         console.log(`${year} is not a leap year!`);
//     }
// }
// isLeapYear(2028);

/* .................... problem -5 : find number between 1-50 that are divisible by 3 and 5 ........... */
// const divisibleArray = []
// for(let i = 1; i < 50; i++){
//     if((i % 3 === 0 ) && (i % 5 === 0)){
//         divisibleArray.push(i);
//     }
// }
// console.log(divisibleArray);

/* .............. problem 6 : find biggest array element(string) ............... */

// const friends = ["rahima", "karim", "heroAlam", "abdullahh", "samsed"];

function largeName(array) {
  let longest = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return `longest friend name is : ${longest}`
}
console.log(largeName(friends));


/* .................... remove duplicate element from an array ............... */

const numbers = [5, 5, 8, 0, 9, 2, 1, 5, 88, 33, 1]
function removeDuplicate(arr){
    const unique = [];
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if (unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;
}
console.log(removeDuplicate(numbers));