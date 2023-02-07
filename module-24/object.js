const student = {
    name : 'sakib',
    id : 121,
    address : 'movie cinema',
    isSingle : true,
    friends : ['apu', 'bubli', 'toy'],
    act : function(){
        console.log('acting like sakib khan.');
    },
    car : {
        brand : 'tesla',
        price : 50000,
        made : 2025,
        manufacturer : {
            name : 'tesla',
            ceo : 'elon musk',
        }
    }
}
student.act();