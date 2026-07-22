let arr = [0];
let target = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        count++;
    }
}

console.log(`${target} appeared ${count} times`);
