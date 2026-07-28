let num = 1235897;
let result = 0;

while (num) {
    let max = 0;
    let temp = num;

    while (temp) {
        let check = temp % 10;

        if (check > max) {
            max = check;
        }

        temp = Math.floor(temp / 10);
    }

    result = result * 10 + max;

    let newNum = 0;
    let isRemoved = false;

    while (num) {
        let check = num % 10;

        if (check === max && !isRemoved) {
            isRemoved = true;
        } else {
            newNum = newNum * 10 + check;
        }

        num = Math.floor(num / 10);
    }

    num = newNum;
}

console.log(result);
