//A recursive function is a function that calls itself until it doesn’t
//A recursive function always has a condition that stops the function from calling itself.


function recurse() {
    // ...
    recurse();
    // ...
}



//A recursive function always has a condition to stop calling itself, otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:

function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}


function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
}
