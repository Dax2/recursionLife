// wrapping my head around a simple addition function.
// later adding some strings to make interesting yet worthless play between numbers generated and strings in relation to the numbers.
//they work a little like console logs to visualize whats happening INSIDE the function. 

function add(x){
    if (x<=0){
          return 0;
      } else {
          return x + add (x -1);    //add(3) 6
      }
  }

//just ramping up to my masterpiece by introducing strings. 

  function blaber(n){                                       
    if (n <=0){
   return 'ya' + 0;
     } else {
        return  'yo' + n + blaber(n - 1);           //i have no idea what the point of this is. 
    }

}

blaber(3)           
"yo3yo2yo1ya0"

//very underwhelming masterpiece

function flavorFlave(n){
    if (n <=0){
   return 'yeeeeeeeaboiiiiiiii' + 0;
     } else {
        return  'yo' + n + blaber(n - 1); //flavorFlave(3) "yo3yo2yo1ya0" not sure why im missing "yeaa" part?
    }

}


function hurryUp(n){
    if ( n >= 5){                    //this is my attempt to experiment with diferent base cases.
        return 'go!';
    } else {
        return n + hurryUp(n + 1);   //hurryUp(1) "1234go!"
    }                                //hurryUp(4) "4go!"
                                    // hurryUp(6) "go!"    where n is greater than base case 5 we will always return "go!"

}
