let arr = [1, 0, 2, 0, 3, 0, 4, 0];

let j = 0;

// Move all non-zero elements to the front like this [1,2,3,4]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[j] = arr[i];
        j++;
    }
}

// Fill the remaining positions with zeros
while (j < arr.length) { // here j will start from 4 and make 0 every element afterwards
    arr[j] = 0;
    j++;
}

console.log(arr);
