let num = 6;
let sum = 0;
for(num; num > 0; num--) {
    let product = 1;
    for(let j = 1; j <= num; j++) {
        product = product * j;
    }
    sum = sum + product;    
}
console.log(sum);
