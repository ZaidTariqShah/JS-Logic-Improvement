let num = Number(prompt("Please write a number"));
let isPrime = true;
if(num <= 1) {
    isPrime = false;
}
if(num > 2 && num % 2 === 0) {
    isPrime = false;
}
if(num > 3 && num % 3 === 0) {
    isPrime = false;
}
for(let j = 1; ((6*j - 1) <= Math.sqrt(num)); j++){
    if(num % (6 * j -1 ) === 0) {
        isPrime = false;
        break;
    } 
    if(num % (6 * j + 1) === 0) {
        isPrime = false;
        break;
    }
}
if(isPrime) {
    console.log(`${num} is Prime`);
} else {
    console.log(`${num} is not Prime`);
}
