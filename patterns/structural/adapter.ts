namespace adapterPattern {
    interface Lion {
        roar(): void
    }

    class AfricanLion implements Lion {
        public roar(): void { }
    }

    class AsianLion implements Lion {
        public roar(): void { }
    }

    class Hunter {
        public hunt(lion: Lion) {
            lion.roar()
        }
    }

    class WildDog {
        public bark(): void { }
    }

    class WildDogAdapter implements Lion {
        protected dog

        constructor(dog: WildDog) {
            this.dog = dog
        }

        public roar(): void {
            this.dog.bark()
        }
    }

    let wildDog = new WildDog()
    let wildDogAdapter = new WildDogAdapter(wildDog)

    let hunter = new Hunter()
    hunter.hunt(wildDogAdapter)
}