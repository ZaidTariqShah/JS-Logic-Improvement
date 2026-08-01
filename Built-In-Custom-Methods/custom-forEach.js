let array = [1,2,3,4,5,];
function forEach(cb) {
  for(let i = 0; i < array.length; i++) {
    cb(array[i],i,array)
  }
}
forEach(function (value,index,array) {
  return array[index] = value * 2;
})
console.log(array);
