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
    if (number <= 1){
        return ("number too small");
    }
    let counter = 0;
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            counter++;
        }
    }
    if(counter === 0){
        return `${number} is a prime number`;
    }else{
        return `${number} is not a prime number`;
    }
}
console.log(isPrimeNumber(353));

// find nth prime number
// function isPrime(p){
//     const upper = Math.sqrt(p);
//     for(let i = 2;i <= upper; i++){
//         if(p % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// function prime(n){
//     if (n < 1){
//         throw Error ("n too small" + n)
//     }
//     let count = 0;
//     let result = 1;
//     while(count < n){
//         result++;
//         if(isPrime(result)){
//             count++
//         }
//     }
//     return result;
// }
// console.log(prime(3));