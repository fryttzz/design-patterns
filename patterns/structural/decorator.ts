namespace decoratorPattern {
    interface Coffee {
        getCost(): number
        getDescription(): String
    }

    class SimpleCoffee implements Coffee {
        public getCost(): number {
            return 10
        }

        public getDescription(): String {
            return "Simple coffee"
        }
    }

    class MilkCoffee implements Coffee {
        protected coffee

        public constructor(coffee: Coffee) {
            this.coffee = coffee
        }

        public getCost(): number {
            return this.coffee.getCost() + 2
        }

        public getDescription(): String {
            return this.coffee.getDescription() + ", milk"
        }
    }

    class WhipCoffee implements Coffee {
        protected coffee

        public constructor(coffee: Coffee) {
            this.coffee = coffee
        }

        public getCost(): number {
            return this.coffee.getCost() + 5
        }

        public getDescription(): String {
            return this.coffee.getDescription() + ", whip"
        }
    }

    class VanillaCoffee implements Coffee {
        protected coffee

        public constructor(coffee: Coffee) {
            this.coffee = coffee
        }

        public getCost(): number {
            return this.coffee.getCost() + 3
        }

        public getDescription(): String {
            return this.coffee.getDescription() + ", vanilla"
        }
    }

    let someCoffee = new SimpleCoffee()
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());

    someCoffee = new MilkCoffee(someCoffee)
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());
    
    someCoffee = new WhipCoffee(someCoffee)
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());

    someCoffee = new VanillaCoffee(someCoffee)
    console.log(someCoffee.getCost());
    console.log(someCoffee.getDescription());
}