function time(hour,minute,period){
if(minute <= 30){
  var minDesc = "just after";
} else{
  var minDesc = "almost";
  hour = hour+1;
}

if(period === "AM"){
  period = "in the morning";
} else if (period === "PM"){
  period = "in the evening";
} else{
  console.log("invalid period");
  return;
}

console.log("It's", minDesc, hour, period);
}

time(9,10,"AM");
