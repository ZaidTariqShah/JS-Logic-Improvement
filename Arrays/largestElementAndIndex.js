let arr = [1,2,3,4,5,10,6,7,8];
let largestIndex = 0;

if (arr.length === 0) {
    alert("Array is empty");
} else {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            largestIndex = i;
        }
    }

    console.log(`Largest element: ${max}`);
    console.log(`Index: ${largestIndex}`);
}
