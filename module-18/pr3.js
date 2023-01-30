var firstNumber = 13;
var secondNumber = 79;
var thirdNumber = 45;
if (firstNumber > secondNumber && firstNumber > thirdNumber ){
    console.log(`${firstNumber} is largest`);
}else if (secondNumber > firstNumber && secondNumber > thirdNumber ){
    console.log(`${secondNumber} is largest`);
} else {
    console.log(`${thirdNumber} is largest`);
}

// triangle solution 
var sideOne = 9;
var sideTwo = 8;
var sideThree = 9;

if (sideOne == sideTwo || sideOne == sideThree){
    console.log("triangle is isosceles");
} else {
    console.log("the triangle is not isosceles");
}