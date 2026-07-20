let num = Number(prompt("Please enter a number"));

if (isNaN(num) || num <= 0) {
    alert("Please write a proper number");
} else {
    let a = 0;
    let b = 1;

    for (let i = 1; i < num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    console.log(a);
}
