/* simple mindGame function that takes number as input. it calcultes mathmatical BODMAS according to requirements. */
function mindGame(num){
    if(typeof num === "number"){
        if(num > 0){
            let result = (((num * 3) + 10 ) / 2) - 5;
            return result;
        } else {
            return "Please provide a positive number!";
        }
    } else {
        return "Input should be a number!";
    }
};




/* evenOdd() function that checks if a string length is even or odd. */
function evenOdd(str){
    if(typeof str === "string"){
        if(str.length % 2 === 0){
            return "even";
        } else {
            return "odd";
        }
    } else {
        return "Please provide a string character!";
    }
};




/* function that checks if the number is less or greater than seven. 
if lower then return the result otherwise double it */
function isLGSeven(number){
    if(typeof number === "number"){
        let subtractionResult = number - 7;
        if(subtractionResult < 7){
            return subtractionResult;
        } else {
            return number * 2;
        }
    } else {
        return "Please provide a valid number!";
    }
};




/* function that takes array as input and returns negative numbers length from an arrray. */
function findingBadData(arr){
    if(Array.isArray(arr) === true){
        const badData = [];
        for(let i = 0; i < arr.length; i++){
            const element = arr[i];
            if(element < 0 && typeof element === "number"){
                badData.push(element);
            }
        }
        return badData.length;
    } else {
        return "Input should be Array!";
    }
};




/* gemsToDiamond function that takes three number parameter as input(gems number) and multiply with gems power number then return as diamond number. */
function gemsToDiamond(gemsNum1, gemsNum2, gemsNum3){
    const gemsPower1 = 21;
    const gemsPower2 = 32;
    const gemsPower3 = 43;
    if(typeof gemsNum1 === "number" && typeof gemsNum2 === "number" && typeof gemsNum3 === "number"){
        let totalDiamond = gemsNum1*gemsPower1 + gemsNum2*gemsPower2 + gemsNum3*gemsPower3;
        if(totalDiamond >= 1000*2){
            let remainingDiamond = totalDiamond - 2000;
            return remainingDiamond;
        } else {
            return totalDiamond;
        }
    } else {
        return "Please provide three valid numbers as parameter!";
    }
}