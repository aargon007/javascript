// -----------------------namta -------------------------------------
function namta(num){
    //creating a multiplication table
    for(let i = 1; i <= 10; i++) {
    // multiply i with number
        const result = i * num;
    // display the result
        console.log(result);
    }
}
namta(10)


//................ return text as lowercase letters
let name = "MK";

function doLowercase(text){
    return text.toLowerCase();
}
console.log(doLowercase(name));


// ------------ fullname banao function
function fullName(prothomName, sesName){
    console.log(prothomName + " " + sesName);
}
fullName("md", "chudna");

// square koro function
function squareKoro(num){
    return num**2;
}
console.log(squareKoro(5));