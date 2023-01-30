var numbers = [ 45, 783, 33, 90, 11, 36, 20];

for (var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    if (number > 50){
        continue;
    }
    console.log(number);
}