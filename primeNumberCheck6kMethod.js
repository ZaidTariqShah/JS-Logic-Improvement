let num = Number(prompt("Please Enter A Number"));
let isPrime = true;

if (isNaN(num)) {
    alert("Please write a proper number");
} else {
    if (num > 2 && num % 2 === 0) {
        isPrime = false;
    }

    if (num > 3 && num % 3 === 0) {
        isPrime = false;
    }

    if (num <= 1) {
        isPrime = false;
    }

    let limit = Math.sqrt(num);

    for (let k = 1; (6 * k - 1) <= limit; k++) {
        if (num % (6 * k + 1) === 0) {
            isPrime = false;
            break;
        }

        if (num % (6 * k - 1) === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("It is a Prime Number");
    } else {
        console.log("It is not a Prime Number");
    }
}
