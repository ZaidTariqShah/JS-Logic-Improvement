let arr = [1, 2, 3, 4, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let track = 0;

    for (let j = i - 1; j >= 0; j--) {
        if (arr[i] === arr[j]) {
            track++;
        }
    }

    if (track === 0) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] === arr[k]) {
                count++;
            }
        }

        console.log(`${arr[i]} appeared ${count} times`);
    }
}

// OPTIMIZED APPROACH
let arr = [1,2,3,4,5,6,7,7,8,6,9,10];
for(let i = 0; i < arr.length; i++) {
    let track = 0;
    for(let j = i - 1; j >= 0; j--) {
        if(arr[i] === arr[j]) {
            track++;
            break;
        }
    }
    if(track === 0) {
        let count = 1; // Because we are already standing on this element.
        for(let k = i + 1; k < arr.length; k++) { // Check only the remaining elements after the current one.
            if(arr[i] === arr[k]) {
                count++;
            }
        }
        console.log(`${arr[i]} appeared ${count} times`);
    }
}
