let arr = [1,2,3,2,3,1];
let found = false;

for(let i = 0; i < arr.length; i++) {
    let count = 0;

    for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            count++;
        }
    }

    if(count === 1) {
        found = true;
        console.log(arr[i]);
        break;
    }
}

if(!found) {
    console.log("No non-repeating element");
}
