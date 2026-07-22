let arr = [-5];

if(arr.length < 2) {
    alert("Array is Empty OR has less than 2 elements in it");
} else {
    let max = arr[0];
    let secondLargest = null;

    for(let i = 1; i < arr.length; i++) {

        if(max < arr[i]) {
            secondLargest = max;
            max = arr[i];
        }

        if(arr[i] < max && (secondLargest === null || arr[i] > secondLargest)) {
            secondLargest = arr[i];
        }
    }

    console.log(
        secondLargest === null
            ? "No Second Largest Element Found"
            : `${secondLargest}`
    );
}
