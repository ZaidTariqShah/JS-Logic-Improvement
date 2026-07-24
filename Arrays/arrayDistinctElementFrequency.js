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
