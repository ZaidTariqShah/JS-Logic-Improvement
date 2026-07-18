let num = Number(prompt("Please enter a number"));

if (num <= 1) {
    alert("num cannot be less or equal to 1");
} else {
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        let limit = Math.sqrt(i);

        for (let j = 2; j <= limit; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}


//More OPTIMIZATION
let num = Number(prompt("Please enter a number"));

if (num <= 1) {
    alert("The number must be greater than 1.");
} else {
    for (let i = 2; i <= num; i++) {
        let isPrime = true;

        if (i > 2 && i % 2 === 0) {
            isPrime = false;
        }

        if (i > 3 && i % 3 === 0) {
            isPrime = false;
        }

        let limit = Math.sqrt(i);

        if (isPrime) {
            for (let j = 1; (6 * j - 1) <= limit; j++) {
                if (i % (6 * j + 1) === 0) {
                    isPrime = false;
                    break;
                }

                if (i % (6 * j - 1) === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}
