function EaO(arr){
  var even=0;
  var odd=0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 !== 0){
      odd++;
      even=0;
      if(odd===3){
        console.log("That's Odd!");
        odd=0;
      }
    }
    else {
      even++;
      odd=0;
      if (even===3) {
        console.log("Even More So!");
        even=0;
      }
    }
  }
}

EaO([3,2,4,5,4,6,2,4,9,7,3]);
