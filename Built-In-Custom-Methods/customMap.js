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
