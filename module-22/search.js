//string.includes()
const lyrics = "tumi bondhu kala pakhi";
const doesExist = lyrics.includes("Pakhi".toLowerCase());
console.log(doesExist);

//string.indexOf()
console.log(lyrics.indexOf("bondhu")); //koto index a ase ta dekhabe

if (lyrics.indexOf("bondhu") !== -1){
    console.log("exist");
} else {
    console.log("nai");
}

//string.startsWith
console.log(lyrics.startsWith("tumi")); // thakle true return korbe

