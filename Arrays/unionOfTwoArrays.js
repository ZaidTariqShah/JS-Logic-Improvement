let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let mainArr = [];

for (let i = 0; i < arr1.length; i++) {
    mainArr.push(arr1[i]);
}

for (let j = 0; j < arr2.length; j++) {
    mainArr.push(arr2[j]);
}

let totalDistinctElements = 0;

for (let i = 0; i < mainArr.length; i++) {

    let track = 0;

    for (let j = 0; j < i; j++) { // Check only the elements before the current index because we count only the first occurrence of each element, ensuring each distinct element is counted only once.

        if (mainArr[i] === mainArr[j]) {
            track++;
            break;
        }

    }

    if (track === 0) {
        totalDistinctElements++;
    }

}

console.log(totalDistinctElements);
