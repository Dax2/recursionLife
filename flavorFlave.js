function add(x){
    if (x<=0){
          return 0;
      } else {
          return x + add (x -1);
      }
  }

//just ramping up to my masterpiece by introducing strings. 

  function blaber(n){
    if (n <=0){
   return 'ya' + 0;
     } else {
        return  'yo' + n + blaber(n - 1);
    }

}

//very underwhelming masterpiece

function flavorFlave(n){
    if (n <=0){
   return 'yeeeeeeeaboiiiiiiii' + 0;
     } else {
        return  'yo' + n + blaber(n - 1);
    }

}