/* Problem 1: Let’s play a mind game
তোমাকে একটা function দেওয়া হবে called “mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে। 
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। Sample Input & Output:-
Input: 5 Output: 7.5
Input: 50 Output: 65
Input: -33 Output: -25.5 */ 


//simple mindGame function. it calcultes mathmatical BODMAS according to requirements.
function mindGame(num){
    //if input is a number.
    if(typeof num === "number"){
        let result = (((num * 3) + 10 ) / 2) - 5;
        return result;
    } else {
        //if input is not a number.
        return "Input is not a number."
    }
}
console.log(mindGame(5));




/* Problem 2: Finding even or odd
তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
Input: ‘Phero" Output: Odd
Input: ‘Batch7’   Output: Even
Input: ‘chatgpt’  Output: Odd */

// evenOdd() function that checks if a string length is even or odd.
function evenOdd(str){
    //if input is a string
    if(typeof str === "string"){
        if(str.length % 2 === 0){
            return "Even";
        } else {
            return "Odd";
        }
    } else {
        //if input is not a string
        return "Please provide a string character.";
    }
}
console.log(evenOdd(true));



/* Problem 3: Is Less or Greater than seven
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.Sample Input & Output:-
Input: 6 Output: -1
Input: -15 Output: 44
Input: 13  Output: 6 */