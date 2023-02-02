function maxInArray(array){
    let largest = array[0];
    for(let i = 0; i< array.length; i++){
        const element = array[i];
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 137];
const tallest = maxInArray(heights);
console.log("tallest person is:", tallest);



//lowest number in array
function minInArray(array){
    return Math.min.apply(null, array);
}
console.log(minInArray(heights));