// celcius to fahrenheit 
function celcius2Fahrenheit(celcius){
    let fahrenheit = celcius * ( 9 / 5) + 32;
    console.log(fahrenheit);
}
celcius2Fahrenheit(2);

// fahrenheit to celcius
function fahrenheit2Celcius(fahrenheit){
    let celcius = (fahrenheit - 32) * (5 / 9);
    console.log(celcius);
}
fahrenheit2Celcius(2);

// grading function
function grade(marks){
    if(marks >= 80) {
        return "A+";
    } else if(marks >= 60 && marks < 80){
        return "B";
    } else if(marks >= 50 && marks < 60){
        return "C";
    } else if(marks >= 40 && marks < 50){
        return "D";
    } else {
        return "Fail";
    }
}
console.log(grade(55));

//