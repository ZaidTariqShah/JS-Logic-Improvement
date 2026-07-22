let arr = [5, 5, 5];

if (arr.length < 3) {
    alert("Array is Empty OR has less than 3 elements in it");
} else {
    let max = arr[0];
    let secondLargest = null;
    let thirdLargest = null;

    for (let i = 1; i < arr.length; i++) {

        if (max < arr[i]) {
            thirdLargest = secondLargest;
            secondLargest = max;
            max = arr[i];
        }

        if (
            arr[i] < max &&
            (secondLargest === null || arr[i] > secondLargest)
        ) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }

        if (
            (thirdLargest === null || arr[i] > thirdLargest) &&
            arr[i] < secondLargest
        ) {
            thirdLargest = arr[i];
        }
    }

    console.log(
        thirdLargest === null
            ? "No Third Largest Element Found"
            : `Third Largest Element is ${thirdLargest}`
    );
}
