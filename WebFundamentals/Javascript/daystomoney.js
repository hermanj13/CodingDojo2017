function numberDays(money){
  var total = .01;
  var days = 1;
  while(total < money ){
    total = total * 2;
    days++;
  }
  console.log(days);
}

numberDays(Infinity);
