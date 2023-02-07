// const numbers = [45, 65, 23, 98,19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }
//same as above
// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'xioami', price : 19000},
    {id: 2, name: 'nokia can take multiple word', price : 32000},
    {id: 3, name: 'walton', price : 25000},
    {id: 4, name: 'xioami phone', price : 8000},
];

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'word');
console.log(result);