// Find the Most Frequent Element in an Array

let arr = [100, 100, 2, 2, 2];

let maxFrequency = 0;
let maxElement = 0;

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count > maxFrequency) {
        maxFrequency = count;
        maxElement = arr[i];
    }
}

console.log(maxElement);
