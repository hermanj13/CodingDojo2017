function printRange(first,last,skip){
  for(var print = first; print < last; print = print + skip){
    console.log(print);
  }
}

// function printRange(first,last){
//   for(var print = first; print < last; print++){
//     console.log(print);
//   }
// }

// function printRange(last){
//   for(var print = 0; print < last; print++){
//     console.log(print);
//   }
// }

printRange(2,10,2);
