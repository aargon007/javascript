const phone = [
    {name : "samsung", camera : 12, storage : "32gb", price : 3600, color : "silver"},
    {name : "Iphone", camera : 15, storage : "32gb", price : 30600, color : "silver"},
    {name : "Nokia", camera : 5, storage : "32gb", price : 300, color : "silver"},
    {name : "Oppo", camera : 19, storage : "32gb", price : 30000, color : "silver"},
    {name : "Xiomi", camera : 10, storage : "32gb", price : 2500, color : "silver"},
    {name : "Vivo", camera : 12, storage : "32gb", price : 3600, color : "silver"},
    {name : "Symphony", camera : 5, storage : "32gb", price : 1600, color : "silver"}
]


function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
console.log(cheapestPhone(phone));