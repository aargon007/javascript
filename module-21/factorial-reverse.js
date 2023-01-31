function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}

const fact = factorial(9);
console.log(fact);