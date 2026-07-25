let arr = [10, 20, 30, 40, 50];

let last = arr[arr.length - 1];

for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
}

arr[0] = last;

console.log(arr);
