let array = {
    length: 0,

    push: function (element) {
        this[this.length] = element;
        this.length++;
    },

    map: function (cb) {
        let newArr = [];

        for (let i = 0; i < this.length; i++) {
            newArr.push(cb(this[i], i, this));
        }

        return newArr;
    }
};

array.push(10);
array.push(20);
array.push(30);
array.push(40);

const result = array.map(function (i) {
    return i * 2;
});

console.log(result);

//---------------------------------------------------------Easy VERSION-------------------------------------------------------------------
let array = [1,2,3,4,5,6,7,8,9,10];
function map(cb) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i],i,array));
    }
    return newArray;
    }
const result = array.map(function(i) {
    return i * 2;
})
console.log(result);
