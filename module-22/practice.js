// practice problem -1 : min number in array 
function minArray(arr){
    let minNumber = arr[0];
    for(let i =0; i < arr.length; i++){
        const element = arr[i];
        if ( element < minNumber){
            minNumber = element;
        }
    }
    return minNumber
}
const myNumber = [20,5, 80,220, 40];
console.log(minArray(myNumber));

// practice problem -1 : min number in array  alternative method

function smallNumber(arr){
    return Math.min.apply(null, arr)
}
console.log(smallNumber(myNumber));


// practice problem - 2: minnumber in 3 numbers
function minNum(x, y, z){
    return Math.min(x,y,z);
}
console.log(minNum(9,3,11));


// practice problem - 3: array er total gor
function arrayMean(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
const myMeanNum = [ 1,6, 9, 18];
console.log(arrayMean(myMeanNum));


//practice problem 4: calculate area of ayotokhetro
function areaRectangle(l,h){
    return l*h;
}
console.log(areaRectangle(6,9));

//practice problem 5: find second largest number in Array
const numList = [ 99, 55,550, 2, 79, 550, 220];
const dupNumList = [...new Set(numList)]
dupNumList.sort(function(a,b){
    return b-a;
})
console.log(dupNumList[1]); // second largest number