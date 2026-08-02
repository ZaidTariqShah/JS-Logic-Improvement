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
    },

    unshift: function (...elements) {
        let shiftBy = elements.length;

        for (let i = this.length - 1; i >= 0; i--) {
            this[i + shiftBy] = this[i];
        }

        for (let i = 0; i < elements.length; i++) {
            this[i] = elements[i];
        }

        this.length += shiftBy;

        return this.length;
    },

    find: function (cb) {
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                return this[i];
            }
        }

        return undefined;
    }
};

for(let i = 0; i <= 10; i++) {
    array.push(i);
}

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

let size = array.unshift(10, 20, 30);

console.log("size:", size);
console.log(array);

let result = array.find((element) => element > 20);

console.log("find:", result);
