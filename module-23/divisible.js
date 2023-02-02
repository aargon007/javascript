//show something if the number is divisible / bivajito hoy by 3,5 or both

for(let i = 1; i <= 50; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log("foobar");
    } else if(i % 5 === 0){
        console.log("bar");
    } else if(i % 3 === 0){
        console.log("foo");
    } else {
        console.log(i);
    }
}