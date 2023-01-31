function findLeapYear(array){
    const leapYear = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if ((element % 400 === 0) || ((element % 4 === 0 ) && (element % 100 !== 0))){  //alternate (element % 2 === 1)
            leapYear.push(element);
        }
    }
    return leapYear;
}

const years = [2023, 2024, 2025, 2028, 2030];
const leapYearInArray = findLeapYear(years);

console.log(`Leap Year in ${years} is ${leapYearInArray}`);