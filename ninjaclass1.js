function Ninja(name) {
    
    var self = this;
    var speed = 3;
    var strength = 3;
    
    this.name = name;
    this.health = 100;
    this.sayName = function() {
        console.log("Hi fren I'm " + self.name);
        return this;
    }
    this.showStats = function(){
        console.log("My health is " + self.health + ", speed: " + speed + ", strength: " + strength);
        return this;
    }

    //drinking is not good for you so drinkSake will decrement health
    this.drinkShake = function(){
        console.log("My health is now: " + (self.health -= 10));
        return this;
    }

}
// privateMethod();
var ninja1 = new Ninja("BigRick");
ninja1.sayName().showStats().drinkShake();
// ninja1.showStats();
// ninja1.drinkShake();