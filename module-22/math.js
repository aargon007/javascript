// math method 
const result = Math.pow(8,2);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = num1 - num2;
console.log(Math.abs(gap));

//Math.round()
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber);

console.log(Math.ceil(number));
console.log(Math.floor(number));

// Math.random() 
// const random = Math.round(Math.random()*100);
for (let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
