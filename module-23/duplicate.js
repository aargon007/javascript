const names = ["abul", "babul", "kabul", "babul", "cabul", "babul", "gabul", "tabul", "abul", "kabul"];

//create function that create unique array and remove duplicate ---- for loop
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

console.log(removeDuplicate(names));