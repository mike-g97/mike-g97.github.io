function findMax(array){
  var maxNum;
  if(array.length > 1){
    maxNum = array[0];
    for(var index = 1; index < array.length; index++){
      if(maxNum <= array[index]){
        maxNum = array[index];
      }
    }
    return maxNum;
  }else if(array.length == 1){
    return array[0];
  }
  return null;
}
