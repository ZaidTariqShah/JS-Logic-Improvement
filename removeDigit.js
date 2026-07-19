let num = 10203040;
let digit = 0;
let another = 0;
let mainResult = 0;

while (num > 0) {
    let digit2 = num % 10;

    if (digit2 !== digit) {
        another = another * 10 + digit2;
    }

    num = Math.floor(num / 10);
}

while (another > 0) {
    let digit3 = another % 10;

    mainResult = mainResult * 10 + digit3;

    another = Math.floor(another / 10);
}

console.log(mainResult);
