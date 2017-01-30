// Add numbers to new array
function numbersArray(arr){
var newArray = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
      newArray.push(arr[i]);
    }
  }
  return(newArray);
}
console.log(numbersArray([7, "apple", "blue", 3, 5]));

// Remove numbers first method
function removeNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(removeNumbers(([1, "apple", -3, "orange", 0.5, 55, 56, 57, "blue", "red", "gray", "blue", "red", "gray", 58, "black"])));


// Remove numbers second method
function removeNumbers2(arr) {
    var i = 0;
    while (i < arr.length) {
        if (typeof arr[i] !== "number") {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}

console.log(removeNumbers2(([1, "apple", -3, "orange", 0.5, 55, 56, 57, "blue", "red", "gray", "blue", "red", "gray", 58, "black"])));
