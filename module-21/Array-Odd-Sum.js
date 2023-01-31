// sum of array element
function getSumOfArray(array){
    let sum = 0; // o karon jog akhno suru hoini. initial value. pottek loop er sum store kore krom onusare. loop er vitore dile sum purber ta vhule jai
    for(let i = 0; i< array.length; i++){
        sum += array[i];
        
    }
    return sum;
}

//sum odd in array
function getOddNumberOfArray(array){
    const oddArray = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if (element % 2 !== 0){  //alternate (element % 2 === 1)
            oddArray.push(element);
        }
    }
    return oddArray;
}

const myNumbers = [15, 46, 90, 62, 56, 67, 13]
// console.log(getSumOfArray(myNumbers));
const oddNumbers = getOddNumberOfArray(myNumbers);
console.log(oddNumbers);
console.log(getSumOfArray(oddNumbers));