//inches to feet function

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const jimHeight = inchToFeet(84);

console.log("Jim height in feet is: ", jimHeight);