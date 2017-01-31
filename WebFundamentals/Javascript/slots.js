function slots(quarters, stopValue){
    var winner = 52;
      while (quarters > 0){
          var compare = Math.floor((Math.random()) * 100);
          if (compare === winner){
              var winnings = Math.floor((Math.random() * 50) + 175);
              quarters = quarters - 10 + winnings;
              // console.log(winnings)
              // console.log("We Have A Winner");
              // console.log("You have " + quarters + " quarters remaining!");
          } else {
              quarters = quarters - 10;
              // console.log("You have " + quarters + " quarters remaining!");
          }
          if (quarters >= stopValue){
            // console.log("You have over " + stopValue + " quarters! " + (quarters - stopValue) + " more to be exact!");
            return(quarters);
          }
      }
return(quarters);
}

function remove(arr){
  let i = 0;
  while (i < arr.length){
    if (arr[i] === 0 || arr[i] < 0){
      arr.splice(i, 1);
    }
   else {
      i++;
    }
  }
  return(arr);
}

var z = 0;
var arrOdds = [];
while (z < 1000){
  var arr = [];
  var repeat = 10000;
  var quarters = 500;
  var stopValue = 1000;
  for(let x = 1; x < repeat; x++){
    arr.push(slots(quarters, stopValue));
  }
  remove(arr);
  var odds;
  odds = (arr.length / repeat)*100;
  arrOdds.push(odds);
  z++;
}
var sum = 0;
for (let i = 0; i < arrOdds.length; i++){
  sum = sum + arrOdds[i];
}
odds = sum / arrOdds.length;

console.log("Percent chance of winning " + stopValue + " quarters, starting with " + quarters + " is " + odds + "%");
