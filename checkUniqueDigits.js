let num = 10;
let isUnique = true;

while (num > 0) {
    let duplicate = Math.floor(num / 10);
    let check = num % 10;

    while (duplicate > 0) {
        let check2 = duplicate % 10;

        if (check === check2) {
            isUnique = false;
            break;
        }

        duplicate = Math.floor(duplicate / 10);
    }

    if (!isUnique) {
        break;
    }

    num = Math.floor(num / 10);
}

if (isUnique) {
    console.log("It is Unique");
} else {
    console.log("It is not Unique");
}
