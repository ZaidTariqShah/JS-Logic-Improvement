let arr = [1, 2, 3, -4, 5];
let smallestIndex = 0;

if (arr.length === 0) {
    alert("Array is empty");
} else {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            smallestIndex = i;
        }
    }

    console.log(`Smallest element: ${min}`);
    console.log(`Index: ${smallestIndex}`);
}
