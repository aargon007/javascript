function score (marks){
    if (marks >= 80) {
        return "A grade"
    } else if (marks >= 60 && marks < 80){
        return "B grade";
    } else if (marks >= 50 && marks < 60) {
        return "C grade";
    } else if (marks >= 40 && marks < 50){
        return "D grade";
    } else {
        return "F grade";
    }
}
console.log(`my score is ${score(85)}, Tom score is ${score(66)}, Jane score is ${score(95)}, Peter score is ${score(56)}, John score is ${score(40)}`);