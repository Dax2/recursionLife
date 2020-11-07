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


//so here is a countdown recursive function.


function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);


//And here we have a sum of numbers recursive function. 

function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
}
