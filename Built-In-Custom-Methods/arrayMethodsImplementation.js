let array = {
    length: 0,

    push: function (element) {
        this[this.length] = element;
        this.length++;
    },

    map: function (cb) {
        let newArray = [];

        for (let i = 0; i < this.length; i++) {
            newArray.push(cb(this[i], i, this));
        }

        return newArray;
    },

    filter: function (cb) {
        let newArray = [];

        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                newArray.push(this[i]);
            }
        }

        return newArray;
    },

    forEach: function (cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i, this);
        }
    },

    reduce: function (cb, initial) {
        if (this.length === 0 && initial === undefined) {
            throw new Error("Array is empty");
        }

        let accumulator;
        let startIndex;

        if (initial !== undefined) {
            accumulator = initial;
            startIndex = 0;
        } else {
            accumulator = this[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < this.length; i++) {
            accumulator = cb(accumulator, this[i], i, this);
        }

        return accumulator;
    },

    pop: function () {
        if (this.length === 0) {
            return undefined;
        }

        let lastValue = this[this.length - 1];

        delete this[this.length - 1];
        this.length--;

        return lastValue;
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

console.log(array);

let reduce = array.reduce((acc, element) => {
    return acc + element;
}, 0);

console.log("reduce:", reduce);

let map = array.map((element) => {
    return element * 2;
});

console.log("map:", map);

let filter = array.filter((element) => {
    return element % 2 === 0;
});

console.log("filter:", filter);

array.forEach((element, i, array) => {
    array[i] = element * 3;
});

console.log("array:", array);

let old = array.pop();

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("oldValue:", old);
