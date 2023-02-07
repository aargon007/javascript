// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

//recursion
function sum(i){
    if(i == 1){    // etar diya hoy loop 1 a ese thambe same ase (i>1)
        return 1;
    }
    return i+sum(i-1); // same as (let i;i--)
}
const result = sum(5);
console.log(result);