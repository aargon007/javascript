function odd_even(int_num){
    let vagses = int_num % 2;
    if (vagses == 0){
        return "even"
    } else if (vagses != 0){
        return "odd"
    }
}
console.log(odd_even(1));