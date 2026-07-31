let array = {
    length: 0,

    push: function (element) {
        this[this.length] = element;
        this.length++;
    },

    filter: function (cb) {
        let newArr = [];

        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                newArr.push(this[i]);
            }
        }

        return newArr;
    }
};

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);

const result = array.filter(function (i) {
    return i % 2 === 0;
});

console.log(result);

//---------------------------------------------------------Easy VERSION-------------------------------------------------------------------
let array = [1,2,3,4,5,6,7,8,9,10];

function filter(cb) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

const result = filter(function(i) {
    return i % 2 === 0;
});

console.log(result);
