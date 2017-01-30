function time(hour,minute,period){
if(hour == 12 && period === "AM" && minute === 0){
  console.log("It's midnight");
  return;
}
if(hour === 12 && period === "PM" && minute === 0){
  console.log("It's Noon");
  return;
}

if(minute >= 0 && minute < 15){
  minute = "just after";
} else if(minute === 15){
  minute = "quarter after";
} else if(minute > 15 && minute <30){
  minute = "just after quater after";
} else if(minute === 30){
  minute = "half past";
} else if(minute > 30 && minute < 45){
  minute = "just after half past";
} else if(minute === 45){
  minute = "quarter till";
  hour = hour+1;
  if(hour === 13){
    hour = hour - 12;
  }
} else if(minute > 45 && minute < 60){
  minute = "almost";
  hour = hour+1;
  if(hour === 13){
    hour = hour - 12;
  }
} else{
  console.log("Invalid minutes");
  return;
}

if(period === "AM"){
  period = "in the morning";
} else if (period === "PM" && hour <= 6){
  period = "in the afternoon";
} else if (period === "PM"){
  period = "at night";
} else{
  console.log("invalid period");
  return;
}

console.log("It's", minute, hour, period);

}
time(12,00,"PM");
