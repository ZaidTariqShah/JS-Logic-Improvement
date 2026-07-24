let arr = [1,2,3,4];
let firstFrequentElement = null;

for(let i = 0; i < arr.length; i++) {
    let count = 0;

    for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            count++;
        }
    }

    if(count > 1) {
        firstFrequentElement = arr[i];
        break;
    }
}

console.log(firstFrequentElement === null ? "No repeating element" : firstFrequentElement);
