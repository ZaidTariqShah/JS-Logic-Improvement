let num = 123456789;
let sum = 0;
let nextNum = num;
while(nextNum > 0) {
    let digit = nextNum % 10;
    if(digit % 2 === 0) {
        sum += digit
    }
    nextNum = Math.floor(nextNum/10);
}
console.log(`Sum of even numbers of ${num} is ${sum}`);
