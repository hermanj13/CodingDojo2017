function prevLength(arr){
  var mem = arr[arr.length-1].length;
  for(i = (arr.length-1); i>0; i = i-1){
    arr[i] = arr[i-1].length;
  }
  arr[0]=mem;
console.log(arr)
}

prevLength(['Jake','purple','lemon','black','3,27',"miller"]);
