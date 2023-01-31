// 1 * 2 * 3 * 4 * 5 * ...................
// factorial function
function factorial(number){
    let result =1; // jokhon jog korbo tokhon 0 dhorte hobe r guner somoy 1 dhorte hobe.
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);