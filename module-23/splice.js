const friends = [13, 14, 11, 17, 21, 16, 15, 20];
//splice- remove array element from array
const partial = friends.splice(0,2);
console.log(partial);
console.log(friends);

friends.splice(2,3,"b","k");
console.log(friends);