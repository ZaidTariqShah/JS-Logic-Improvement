let arr = [1, 2, 3, 4, 5];

if (arr.length < 3) {
    alert("Array is Empty or has less than 3 elements in it");
} else {
    let min = arr[0];
    let secondMin = null;
    let thirdMin = null;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            thirdMin = secondMin;
            secondMin = min;
            min = arr[i];
        }

        if (
            arr[i] > min &&
            (secondMin === null || arr[i] < secondMin)
        ) {
            thirdMin = secondMin;
            secondMin = arr[i];
        }

        if (
            arr[i] > secondMin &&
            (thirdMin === null || arr[i] < thirdMin)
        ) {
            thirdMin = arr[i];
        }
    }

    console.log(
        thirdMin === null
            ? "No Third Smallest Element Found"
            : `Third Smallest Element is ${thirdMin}`
    );
}
