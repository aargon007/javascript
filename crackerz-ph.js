// reverse word function
function reverseString(word) {
    return word.split("").reverse().join("");
}
console.log(reverseString("hello"));

//reverse text string function 
function reverseStrings(text){
    let reversed = "";
    for  (let i = text.length-1; i >= 0; i++){
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}


// detect vowel and consonant
function solution(letter){
    switch (letter) {
        case "a":
            console.log("VOWEL");
            break;
        case "e":
            console.log("VOWEL");
            break;
        case "i":
            console.log("VOWEL");
            break;
        case "o":
            console.log("VOWEL");
            break;
        case "u":
            console.log("VOWEL");
            break;
        default:
            console.log("CONSONANT");
            break;
    }
}
solution("k");