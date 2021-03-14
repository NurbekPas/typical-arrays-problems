
exports.min = function min (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
  let min1 = array[0];
  for(let i=0; i < array.length;i++){
    if(min1 > array[i]){
      min1 = array[i];
    }
  }
  
  return min1;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
  let max1 = array[0];
  for(let i=0; i < array.length;i++){
    if(max1 < array[i]){
      max1 = array[i];
    }
  }
 
  return max1;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0){
    return 0;
  }
  let avg1 = 0;
  for(let i = 0; i < array.length;i++){
    avg1 = avg1 + array[i];
  }
avg1 = avg1 / array.length;

  return avg1;
}
