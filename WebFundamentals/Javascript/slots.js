function slots(quarters, stopValue){
    var winner = 52;
      while (quarters !== 0){
          var compare = Math.floor((Math.random()) * 100);
          if (compare === winner){
              var winnings = Math.floor((Math.random() * 50) + 50);
              quarters = quarters - 1 + winnings;
              console.log("We Have A Winner");
              console.log("You have " + quarters + " quarters remaining!");
          } else {
              quarters = quarters - 1;
              console.log("You have " + quarters + " quarters remaining!");
          }
          if (quarters >= stopValue){
            console.log("You have over " + stopValue + " quarters! " + (quarters - stopValue) + " more to be exact!");
            break;
          }
      }

}

slots(40, 10);
