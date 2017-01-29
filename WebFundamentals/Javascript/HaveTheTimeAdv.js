function time(hour,minute){
if(hour === 12 && period === "AM" && minute === 0){
  console.log("It's midnight");
  return;
}
if(hour === 12 && period === "PM" && minute === 0){
  console.log("It's Noon");
  return;
}

if(minute > 0 && minute < 15){
  var minute = "just after";
} else if(minute === 15){
  var minute = "quarter after";
} else if(minute > 15 && minute <30){
  var minute = "just after quater after";
} else if(minute === 30){
  var minute = "half past";
} else if(minute > 30 && minute < 45){
  var minute = "just after half past";
} else if(minute === 45){
  var minute = "quarter till";
  hour = hour+1;
} else if(minute > 45 && minute < 60){
  var minute = "almost";
  hour = hour+1;
} else{
  console.log("Invalid minutes");
  return;
}
console.log(minute);



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

// console.log("It's", minute, hour, period);


}
time(3,63);
