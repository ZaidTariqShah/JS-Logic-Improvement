let num = Number(prompt("Please enter a number"));
if(isNaN(num) || num < 0) {
    alert("Please write a proper number")
} else {
let a = 0;
let b = 1;
while(a <= num) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}
}
