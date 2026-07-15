let num = 909;
let max = 0;
let secondLargest = -1;

while (num > 0) {
    let check = num % 10;

    if (check > max) {
        secondLargest = max;
        max = check;
    } else if (check < max && check > secondLargest) {
        secondLargest = check;
    }

    num = Math.floor(num / 10);
}

if (secondLargest === -1) {
    console.log("No Second Largest Digit Found");
} else {
    console.log("The second largest digit is:", secondLargest);
}
