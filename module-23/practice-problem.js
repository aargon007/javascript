/*  সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */

function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}
let myHeight = Math.round(feetToInch(5.6));
console.log(`feet in inchs is : ${myHeight}`);


/*  একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।  */

function centimeterToMeter(centimeter){
    let meter = centimeter * 0.01;
    return meter;
}
let cm = 10;
let cm2mtr = centimeterToMeter(cm);
console.log(`${cm}cm in meter is : ${cm2mtr}`);


/* আরেকটা ফাংশন লিখবে যেটার নাম লিখবে paperRequirements . এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা . সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা .তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা .
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */

function paperRequirements(book1Copy, book2Copy, book3Copy){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    const book1TotalPage =  book1Copy * book1Page;
    const book2TotalPage =  book2Copy * book2Page;
    const book3TotalPage =  book3Copy * book3Page;
    const totalPage = book1TotalPage + book2TotalPage + book3TotalPage;
    return totalPage;
}
let myBookPage = paperRequirements(3,6,2);
console.log(myBookPage);

/* একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

function bestFriend(arr){
    let largestName = "";
    for(let i = 0; i < arr.length; i++){
        if(arr.length > largestName.length){
            largestName = arr[i];
        }
    }
    return `The largest friend name is : ${largestName}`
}
const bestFriends = ["sajid", "kamal", "jubayer bin rased", "chinku"];
console.log(bestFriend(bestFriends));

//alternative solution
function bestFriend(name){
    let friend = name[0];
    for (let i = 0; i<name.length; i++){
        let element = name[i];
        if(element < friend){
            friend = element
        }
    }
    return friend;
}
const nameList = ["abul", "kabula", "babul", "abdullah"];
console.log(bestFriend(nameList));

/* এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */

function positiveNumber(numbers){
    let onlyPositive = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element >= 0){
            onlyPositive.push(element);
        } else{
            break;
        }
    }
    return onlyPositive;
}
const myNumbers = [45, 87, 96, 11, 63, -56, 71, 28];
const myUniqueNum = positiveNumber(myNumbers);
console.log(myUniqueNum);