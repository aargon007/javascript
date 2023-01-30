const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
var penCount = shoppingCart.pen;
// console.log(shoppingCart);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

// console.log(properties);
// console.log(propertyValues);

var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);