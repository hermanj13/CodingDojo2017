function printRange(first,last,skip){
  for(var print = first; print < last; print = print + skip){
    console.log(print);
  }
}

printRange(2,10,2);
