let num = Number(prompt("Please enter a number"));
let sum = 0;

if (isNaN(num) || num <= 1) {
    alert("Please write a proper number");
} else {
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum = sum + i;
        }
    }

    if (sum === num) {
        console.log(`${num} is a perfect number`);
    } else {
        console.log(`${num} is not a perfect number`);
    }
}
