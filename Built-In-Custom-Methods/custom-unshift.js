let arr = [1, 2, 3, 4, 5];

function unshift(...elements) {
    let shiftBy = element.length;

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + shiftBy] = arr[i];
    }

    for (let i = 0; i < element.length; i++) {
        arr[i] = element[i];
    }

    return arr.length;
}

const size = unshift(10, 20, 30);

console.log(arr);
console.log(size) // returned size
