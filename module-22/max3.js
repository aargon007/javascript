// const jim = 69;
// const dela = 97;
// const chinku = 98;

// if (jim > dela && jimm > chinku){
//     console.log("jim will get the cake");
// } else if (dela > jim && dela > chinku){
//     console.log("dela will gett the cake");
// } else {
//     console.log('chinku will get the cake');
// }

// const num1 = 20;
// const num2 = 30;
// const num3 = 40;

//practice : find the max number- if else method
// if ((num1 > num2) && (num1 > num3)){
//     console.log(`bigest number is : ${num1}`);
// } else if ((num2 > num1) && (num2 > num3)){
//     console.log(`bigest number is : ${num2}`);
// } else {
//     console.log(`bigest number is : ${num3}`);
// }


//practice : find the max number by function
function findMax(num1, num2, num3){
    const maxNumber = Math.max(num1, num2, num3)
    console.log(maxNumber);
}
findMax(30,60,10);