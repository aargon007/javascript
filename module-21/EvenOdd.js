// even and odd number checking function 

function isEven(number){
    const vagses = number % 2;
    if(vagses === 0){
        return true;
    } else {
        return false;
    }
}

let myNumber = 33;
let myNumberIsEven = isEven(myNumber);
console.log(`${myNumber} is even number? ${myNumberIsEven}`);