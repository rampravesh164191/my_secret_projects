"use strict";
class Duck {
    name;
    interest;
    constructor(name, interest) {
        this.name = name;
        this.interest = interest;
    }
    fly() {
        return `${this.name} is flying.`;
    }
    sound() {
        return `${this.name} is quacking`;
    }
    swim() {
        return `${this.name} is swimming`;
    }
}
class IndianDuck extends Duck {
    constructor(name, interest) {
        super(name, interest);
    }
    fly() {
        return `${this.name} is flying at 20kmph`;
    }
    eat() {
        return `${this.name} is eating a fish`;
    }
}
class WoodenDuck extends Duck {
    constructor(name, interest) {
        super(name, interest);
    }
    fly() {
        return `${this.name} can't fly.`;
    }
    swim() {
        return `${this.name} can't swim.`;
    }
}
const duck1 = new IndianDuck("swan", "eating fish");
console.log(duck1.swim());
const duck2 = new WoodenDuck("Rubber Duck", "quacking");
console.log(duck2.swim());
