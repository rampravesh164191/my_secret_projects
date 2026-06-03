class Duck{
    name : string;
    interest : string;

    constructor(name:string, interest:string){
        this.name = name;
        this.interest = interest;
    }

    fly():string{
        return `${this.name} is flying.`
    }
    sound():string{
        return `${this.name} is quacking`
    }
    swim():string{
        return `${this.name} is swimming`
    }
}

class IndianDuck extends Duck{
    constructor(name:string, interest:string){
        super(name,interest);
    }
    fly():string{
        return `${this.name} is flying at 20kmph`;
    }
    eat():string{
        return `${this.name} is eating a fish`;
    }
}

class WoodenDuck extends Duck{
    constructor(name:string, interest:string){
        super(name, interest);
    }
    fly():string{
        return `${this.name} can't fly.`;
    }
    swim():string{
        return `${this.name} can't swim.`;
    }
}

const duck1 = new IndianDuck("swan","eating fish");
console.log(duck1.swim());
const duck2 = new WoodenDuck("Rubber Duck", "quacking");
console.log(duck2.swim());