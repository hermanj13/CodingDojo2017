//Won't work if arr[0] is the largest, will fix at later date

function secLarge(arr){
  var max = arr[0];
  var max2 = arr[0];
  if(arr.length > 1){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > max2 && arr[i] < max){
        max2 = arr[i];
      }
    }
  }
  else{
    console.log(arr);
    return "blue";
  }
  return max2;
}

console.log(secLarge([77777,77777,77777]))
