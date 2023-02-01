// reverse word function
function reverseString(word) {
    return word.split("").reverse().join("");
}
console.log(reverseString("hello"));


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