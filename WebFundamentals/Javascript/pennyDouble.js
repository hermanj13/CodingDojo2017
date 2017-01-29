function pennyDouble(days){
  var money = .01;
  for(var counter = 0; counter < days; counter++){
    money = money*2;
  }
  console.log(money);
}

pennyDouble(30);
