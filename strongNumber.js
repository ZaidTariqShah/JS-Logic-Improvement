let num = Number(prompt("Please write a number"));
let sum = 0;

if (isNaN(num) || num < 0) {
    alert("Please write a proper number");
} else {
    let nextNum = num;

    do {                                      // use do while in order to handle the Input 0 here
        let digit = nextNum % 10;
        let factorial = 1;

        for (let i = 1; i <= digit; i++) {
            factorial *= i;
        }

        sum += factorial;
        nextNum = Math.floor(nextNum / 10);

    } while (nextNum > 0);

    console.log(
        num === sum
            ? `${num} is a Strong Number`
            : `${num} is not a Strong Number`
    );
}
