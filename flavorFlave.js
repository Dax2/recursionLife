function add(x){
    if (x<=0){
          return 0;
      } else {
          return x + add (x -1);
      }
  }