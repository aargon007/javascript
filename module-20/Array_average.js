// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// // forEach function for Array 
// numbers.forEach(make_avg);
// function make_avg(arrValue) {
//     sum += arrValue;
// }
// // average the sumed value 
// let average = sum / numbers.length;
// console.log(average);



// alternate code 
const numbers = [45, 4, 9, 16, 25];

function calculate(array, size) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / size;
}

console.log(calculate(numbers, numbers.length));