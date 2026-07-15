let num = 2468;
let maxOdd = -1;
while(num > 0) {
    let check = num % 10;
    if(check % 2 !== 0 && check > maxOdd) {
        maxOdd = check;
    }
    num = Math.floor(num/10);
}
if(maxOdd === -1) {
    console.log("No Odd Digits found")
} else {
    console.log(maxOdd);
}
