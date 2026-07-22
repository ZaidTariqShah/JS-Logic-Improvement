let arr = [5, 5, 5];

if (arr.length < 2) {
    alert("Array is Empty or has less than 2 elements in it");
} else {
    let min = arr[0];
    let secondSmallest = null;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            secondSmallest = min;
            min = arr[i];
        }

        if (
            arr[i] > min &&
            (secondSmallest === null || secondSmallest > arr[i])
        ) {
            secondSmallest = arr[i];
        }
    }

    console.log(
        secondSmallest === null
            ? "No Second Smallest Element Found"
            : secondSmallest
    );
}
