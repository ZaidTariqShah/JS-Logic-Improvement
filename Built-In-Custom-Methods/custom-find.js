let array = [1,2,3,4,5];
function find(cb) {
  for(let i = 0; i < array.length; i++) {
    if(cb(array[i],i,array)) {
      return array[i];
    }
  };
  return undefined;
}
let result = find((i) => i > 5);
console.log(result);
