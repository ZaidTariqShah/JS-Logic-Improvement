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
