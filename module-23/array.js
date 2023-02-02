const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {
    id : 121,
    class : 11,
    name : "agun"
}
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// merge array - concat()
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
// recognise an array 
console.log(Array.isArray(friends)); //if it array then return true