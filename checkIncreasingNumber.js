let num = 123345;
let outerCheck = 10;
let isIncreasingOrder = true;

while (num > 0) {
    let check = num % 10;

    if (outerCheck > check) {
        outerCheck = check;
    } else {
        isIncreasingOrder = false;
        break;
    }

    num = Math.floor(num / 10);
}

if (isIncreasingOrder) {
    console.log("It is in an increasing order");
} else {
    console.log("It's not in increasing order");
}
