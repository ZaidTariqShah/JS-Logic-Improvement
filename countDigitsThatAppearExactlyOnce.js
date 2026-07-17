let num = 11234556;
let original = num;
let count = 0;

if (num === 0) {
    count = 1;
} else {
    while (num > 0) {
        let track = 0;
        let check = num % 10;

        let duplicate = original;

        while (duplicate > 0) {
            let check2 = duplicate % 10;

            if (check === check2) {
                track++;
            }

            duplicate = Math.floor(duplicate / 10);
        }

        if (track === 1) {
            count++;
        }

        num = Math.floor(num / 10);
    }
}

console.log(count);
