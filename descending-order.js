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

                                            //ZERO SOLVER VERSION HERE


let num = 123589700;

let temp = num;
let digitsCount = 0;

while (temp) {
    digitsCount++;
    temp = Math.floor(temp / 10);
}

let result = 0;

while (digitsCount) {
    let max = 0;
    let temp = num;
    let count = digitsCount;

    while (count) {
        let check = temp % 10;

        if (check > max) {
            max = check;
        }

        temp = Math.floor(temp / 10);
        count--;
    }

    result = result * 10 + max;

    let newNum = 0;
    let isRemoved = false;
    let count1 = digitsCount;

    while (count1) {
        let check = num % 10;

        if (check === max && !isRemoved) {
            isRemoved = true;
        } else {
            newNum = newNum * 10 + check;
        }

        num = Math.floor(num / 10);
        count1--;
    }

    num = newNum;
    digitsCount--;
}

console.log(result);
