function numbersArray(arr){
var newArray = [];
  for(var i = 0; i < arr.length - 1; i++){
    if(typeof arr[i] === "number"){
      newArray.push(arr[i]);
    }
  }
  return(newArray);
}

var newArray = numbersArray([7, "apple", "blue", 3,5]);
console.log(newArray);
