let num = Number(prompt("Please write a number"));

if (isNaN(num) || num <= 1) {
    alert("Please write a Proper Number");
} else {
    let isPrime = true;

    if (num > 2 && num % 2 === 0) {
        isPrime = false;
    } else if (num > 3 && num % 3 === 0) {
        isPrime = false;
    }

    if (isPrime) {
        let limit = Math.sqrt(num);

        for (let i = 1; (6 * i - 1) <= limit; i++) {
            if (num % (6 * i - 1) === 0) {
                isPrime = false;
                break;
            }

            if (num % (6 * i + 1) === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? `${num} is Prime` : `${num} is not Prime`);
}
