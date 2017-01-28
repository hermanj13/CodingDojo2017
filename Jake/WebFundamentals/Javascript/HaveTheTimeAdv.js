var hour = 11;
var minute = 62;
var period = "PM";

if(hour === 12 && period === "AM" && minute == 0){
  console.log("It's midnight");
  return;
}
if(hour === 12 && period === "PM" && minute == 0){
  console.log("It's Noon");
  return;
}

if(minute > 0 && minute < 15){
  var minDesc = "just after";
}
else if(minute === 15){
  var minDesc = "quarter after";
}
else if(minute > 15 && minute <30){
  var minDesc = "just after quater after";
}
else if(minute === 30){
  var minDesc = "half past";
}
else if(minute > 30 && minute < 45){
  var minDesc = "just after half past"
}
else if(minute === 45){
  var minDesc = "quarter till"
  hour = hour+1
}
else if(minute > 45 && minute < 60){
  var minDesc = "almost"
}
else{
  console.log("Invalid minutes")
  return;
}
console.log(minDesc)
//
// if(period === "AM"){
//   period = "in the morning";
// }
// else if (period === "PM"){
//   period = "in the evening";
// }
// else{
//   console.log("invalid period");
//   return;
// }
//
// console.log("It's", minDesc, hour, period);
