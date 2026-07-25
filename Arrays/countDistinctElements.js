let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

let totalDistinctElements = 0;

for (let i = 0; i < arr.length; i++) {

    let track = 0;

    for (let j = 0; j < i; j++) { // Check only the elements before the current index because we count only the first occurrence of each element, ensuring each distinct element is counted only once.

        if (arr[i] === arr[j]) {
            track++;
            break;
        }

    }

    if (track === 0) {
        totalDistinctElements++;
    }

}

console.log(totalDistinctElements);
