let num = 12233455587775;
let find = 7;
let count = 0;
while(num > 0) {
    let check = num % 10;
    if(find === check) {
        count++
    }
    num = Math.floor(num/10);
}
if(count === 0) {
console.log("Digit not found")
} else {
    console.log(count)
}
