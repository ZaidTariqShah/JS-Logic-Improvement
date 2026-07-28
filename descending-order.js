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

                                //OPTIMIZATION
let num = 0123456789;
let c0 = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
let c8 = 0;
let c9 = 0;
while(num) {
    let digit = num % 10;
    if(digit === 0) {c0++}
    else if(digit === 1) {c1++}
    else if(digit === 2) {c2++}
    else if(digit === 3) {c3++}
    else if(digit === 4) {c4++}
    else if(digit === 5) {c5++}
    else if(digit === 6) {c6++}
    else if(digit === 7) {c7++}
    else if(digit === 8) {c8++}
    else {c9++}
    num = Math.floor(num/10);
}
let result = 0;
while(c9--) result = result * 10 + 9;
while(c8--) result = result * 10 + 8;
while(c7--) result = result * 10 + 7;
while(c6--) result = result * 10 + 6;
while(c5--) result = result * 10 + 5;
while(c4--) result = result * 10 + 4;
while(c3--) result = result * 10 + 3;
while(c2--) result = result * 10 + 2;
while(c1--) result = result * 10 + 1;
while(c0--) result = result * 10;
console.log(result);
