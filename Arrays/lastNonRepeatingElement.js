let arr = [1,2,3,4,5,1];
let lastNonRepeatingElement = null;

for(let i = arr.length - 1; i >= 0; i--) {
    let count = 0;

    for(let j = arr.length - 1; j >= 0; j--) {
        if(arr[i] === arr[j]) {
            count++;
        }
    }

    if(count === 1) {
        lastNonRepeatingElement = arr[i];
        break;
    }
}

console.log(
    lastNonRepeatingElement === null
        ? "No Non repeating element"
        : lastNonRepeatingElement
);
