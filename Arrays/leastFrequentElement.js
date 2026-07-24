let arr = [100, 100, 2, 2, 2];

if (arr.length === 0) {
    alert("Array is empty");
} else {
    let minFrequency = arr.length;
    let minElement = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count < minFrequency) {
            minFrequency = count;
            minElement = arr[i];
        }
    }

    console.log(minElement);
}
