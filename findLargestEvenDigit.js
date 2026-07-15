let num = 0;
let maxEven = -1;
do{
    let check = num % 10;
    if(check % 2 === 0) {
        if(check > maxEven) {
            maxEven = check;
        }
    }
    num = Math.floor(num/10);
} while(num > 0)
if(maxEven === -1) {
    console.log("No even digits found")
} else {
    console.log(maxEven);
}
