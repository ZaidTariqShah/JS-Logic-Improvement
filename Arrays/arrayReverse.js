debugger;
let array = [1,2,3];
let j = 0;
for(let i = array.length - 1; i >= 0; i--) {
    let temp = array[i];
    array[j] = array[i];
    j++;
}
console.log(array);

//----------------------------------------------Easy ONE----------------------------------------------------------------------

let array = [1,2,3];
let j = 0;
let newArray = [];
for(let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
}
console.log(newArray);
