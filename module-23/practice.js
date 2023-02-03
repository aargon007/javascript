//একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য।

function areaScalene(a,b,c){
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area;
}
let myScalene = areaScalene(3,9,7);
console.log(myScalene.toFixed(2));


//কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function isPrimeNumber(number){
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return `${number} is not a prime number`;
        } else{
            return `${number} is a prime number`;
        }
    }
    return number > 1;
}
console.log(isPrimeNumber(4));