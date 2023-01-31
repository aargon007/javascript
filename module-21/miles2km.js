// miles to km in function 

function milesToKm(miles){
    const km = miles * 1.609;
    return km;
}

const distance = milesToKm(2);

console.log("the distance in km : ", distance);