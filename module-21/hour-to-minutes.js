function hourToMinutes(hour) {
    let minutes = hour * 60;
    return minutes;
}

const hours = 2;
const HourInMin = hourToMinutes(hours)
console.log(`${hours} hours in Minutes is : ${HourInMin}`);