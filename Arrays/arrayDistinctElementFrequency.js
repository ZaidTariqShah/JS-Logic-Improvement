let arr = [1, 2, 3, 4, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let track = 0;

    for (let j = i - 1; j >= 0; j--) {
        if (arr[i] === arr[j]) {
            track++;
            break;
        }
    }

    if (track === 0) {
        for (let k = 0; k < arr.length; k++) { //1 appeared 1 times                                  
            if (arr[i] === arr[k]) {    //2 appeared 1 times
                count++;                    //3 appeared 1 times
            }
        }                                      //4 appeared 2 times
                                                 //5 appeared 1 times
        console.log(`${arr[i]} appeared ${count} times`); //6 appeared 1 times
    }
}
// OPTIMIZED APPROACH
let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 9, 10];

for (let i = 0; i < arr.length; i++) {
    let track = 0;

    for (let j = i - 1; j >= 0; j--) {
        if (arr[i] === arr[j]) {
            track++;
            break;
        }
    }

    if (track === 0) {
        let count = 1; // We have already counted the current element.

        // Check only the remaining elements after the current one.
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] === arr[k]) {
                count++;
            }
        }

        console.log(`${arr[i]} appeared ${count} times`);
    }
}
