let num = 12345;
let count = 0;

while (num > 0) {
    let check = num % 10;

    if (check !== 0 && check !== 1) {
        let track = 0;

        for (let i = 2; i < check; i++) {
            if (check % i === 0) {
                track++;
                break;
            }
        }

        if (track === 0) {
            count++;
        }
    }

    num = Math.floor(num / 10);
}

if (count === 0) {
    console.log("No Prime Numbers Found");
} else {
    console.log(count);
}
