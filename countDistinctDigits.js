let num = 9876543210;
let original = num;
let uniqueCount = 0;

while (num > 0) {
    let isUnique = true;
    let check = num % 10;

    original = Math.floor(num / 10);

    while (original > 0) {
        let check2 = original % 10;

        if (check === check2) {
            isUnique = false;
            break;
        }

        original = Math.floor(original / 10);
    }

    if (isUnique) {
        uniqueCount++;
    }

    num = Math.floor(num / 10);
}

console.log(uniqueCount);
