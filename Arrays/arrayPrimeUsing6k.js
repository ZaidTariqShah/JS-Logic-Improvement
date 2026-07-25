let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    let isPrime = true;

    if (arr[i] > 2 && arr[i] % 2 === 0) {
        isPrime = false;
    }

    if (arr[i] > 3 && arr[i] % 3 === 0) {
        isPrime = false;
    }

    if (!isPrime) { // Skip the current iteration because the current element is already known
                  // to be non-prime. This avoids unnecessary prime checks below.
        continue;
    }

    let limit = Math.sqrt(arr[i]);

    for (let k = 1; (6 * k - 1) <= limit; k++) {
        if (arr[i] % (6 * k - 1) === 0) {
            isPrime = false;
            break;
        }

        if (arr[i] % (6 * k + 1) === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(arr[i]);
    }
}
