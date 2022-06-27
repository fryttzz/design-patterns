namespace builder {
    class Burger {
        protected size: Number = 0
        protected cheese: Boolean = false
        protected pepperoni: Boolean = false
        protected lettuce: Boolean = false
        protected tomato: Boolean = false

        constructor(builder: BurgerBuilder) {
            this.size = builder.size
            this.cheese = builder.cheese
            this.pepperoni = builder.pepperoni
            this.lettuce = builder.lettuce
            this.tomato = builder.tomato
        }

        getBurger () {
            console.log('Size: ', this.size );
            console.log('Cheese: ', this.cheese );
            console.log('Pepperoni:', this.pepperoni );
            console.log('Lettuce: ', this.lettuce );
            console.log('Tomato: ', this.tomato );
        }
    }

    class BurgerBuilder {
        public size: Number = 0

        public cheese: Boolean = false
        public pepperoni: Boolean = false
        public lettuce: Boolean = false
        public tomato: Boolean = false

        constructor(size: Number) {
            this.size = size
        }
        public addPepperoni() {
            this.pepperoni = true
            return this
        }
        public addLettuce() {
            this.lettuce = true
            return this
        }
        public addCheese() {
            this.cheese = true
            return this
        }
        public addTomato() {
            this.tomato = true
            return this
        }

        public build(): Burger {
            return new Burger(this)
        }
    }

    let burger = (new BurgerBuilder(14).addPepperoni().addLettuce().addTomato().build()) // no cheese
    burger.getBurger()
}