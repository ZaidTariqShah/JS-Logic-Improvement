let num = 1234;
let min = 10;
let secondMin = 10;

while (num > 0) {
    let check = num % 10;

    if (check < min) {
        secondMin = min;
        min = check;
    } else if (check > min && check < secondMin) {
        secondMin = check;
    }

    num = Math.floor(num / 10);
}

if (secondMin === 10) {
    console.log("No Second Smallest Digit Found");
} else {
    console.log("The second smallest digit is:", secondMin);
}
