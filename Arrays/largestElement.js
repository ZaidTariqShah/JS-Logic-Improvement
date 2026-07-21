let arr = [];

if (arr.length === 0) {
    alert("Array is empty");
} else {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(max);
}
