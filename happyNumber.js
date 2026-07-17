let num = 49;
let seen = new Set();

if (num !== 1) {
    while (!seen.has(num)) {
        seen.add(num);

        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum += digit ** 2;
            num = Math.floor(num / 10);
        }

        num = sum;
    }
}

if (num === 1) {
    console.log("It is a Happy Number");
} else {
    console.log("It is not a Happy Number");
}
