function daysUntilBirthday(days){
  if(days > 30){
    console.log(days + " days until my birthday. Such a long time... :(");
  }
  else if(days <= 30 && days > 0){
    console.log(days + " DAYS UNTIL MY BIRTHDAY!!!!!!!");
  }
  else if(days === 0){
    console.log("What day is it?!?!?!?!?!", "oh yeah... MY BIRTHDAY!!!!!!!!");
  }
  else{
    console.log("invalid amount entered.");
  }

}

daysUntilBirthday(30);
