let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (arr.length === 0) {
    alert("Array is empty");
} else {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    console.log(`Total Odd Numbers are ${count}`);
}
