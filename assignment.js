/* Problem 1: Let’s play a mind game.
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে.
Input: 5 Output: 7.5
Input: 50 Output: 75
Input: 33  Output: 49.5 */ 


/* simple mindGame function. it calcultes mathmatical BODMAS according to requirements. */
function mindGame(num){
    if(typeof num === "number"){
        if(num > 0){
            let result = (((num * 3) + 10 ) / 2) - 5;
            return result;
        } else {
            return "Please provide a positive number!";
        }
    } else {
        return "Input should be a number!";
    }
}
console.log(mindGame(5));




/* Problem 2: Finding even or odd:
তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 
এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।
Input: ‘Phero’   Output: odd
Input: ‘Batch7’  Output: even
Input: ‘chatgpt’  Output: odd */

/* evenOdd() function that checks if a string length is even or odd. */
function evenOdd(str){
    if(typeof str === "string"){
        if(str.length % 2 === 0){
            return "even";
        } else {
            return "odd";
        }
    } else {
        return "Please provide a string character!";
    }
}
console.log(evenOdd("phero"));



/* Problem 3: Is Less or Greater than seven
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে। এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6  Output: -1
Input: -15  Output: -22
Input: 15  Output: 30 */

/* function that checks if the number is less or greater than seven. if lower then return the result otherwise double it */
function isLGSeven(number){
    if(typeof number === "number"){
        let subtractionResult = number - 7;
        if(subtractionResult < 7){
            return subtractionResult;
        } else {
            return number * 2;
        }
    } else {
        return "Please provide a valid number!";
    }
}
console.log(isLGSeven(15));


/* Problem 4: Finding Bad data
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.  এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]  Output: 0
Input: [ 2, -5, -7, -13 ] Output: 3
Input: [ -4, -9, -5, -33, -55 ] Output: 5 */


/* function that takes array as input and returns negative numbers length from an arrray. */
function findingBadData(arr){
    if(Array.isArray(arr) === true){
        const badData = [];
        for(let i = 0; i < arr.length; i++){
            const element = arr[i];
            if(element < 0 && typeof element === "number"){
                badData.push(element);
            }
        }
        return badData.length;
    } else {
        return "Input should be Array!";
    }
}
console.log(findingBadData([2, -5, -7, -13]));


/* Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Input: 1, 1, 1     Output: 96
Input: 20, 200, 50   Output: 6970
Input: 100, 5, 1      Output: 303 */

/* gemsToDiamond function that takes three number parameter as input(gems number) and multiply with gems power number then return as diamond number. */
function gemsToDiamond(gemsNum1, gemsNum2, gemsNum3){
    const gemsPower1 = 21;
    const gemsPower2 = 32;
    const gemsPower3 = 43;
    if(typeof gemsNum1 === "number" && typeof gemsNum2 === "number" && typeof gemsNum3 === "number"){
        let totalDiamond = gemsNum1*gemsPower1 + gemsNum2*gemsPower2 + gemsNum3*gemsPower3;
        if(totalDiamond >= 1000*2){
            let remainingDiamond = totalDiamond - 2000;
            return remainingDiamond;
        } else {
            return totalDiamond;
        }
    } else {
        return "Please provide three valid numbers!";
    }
}
console.log(gemsToDiamond(100,5,1));