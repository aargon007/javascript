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