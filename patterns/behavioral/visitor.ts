namespace visitorPattern {
    interface Animal {
        accept(operation: AnimalOperation): void
    }

    interface AnimalOperation {
        visitMonkey(monkey: Monkey): void
        visitLion(lion: Lion): void
        visitDolphin(dolphin: Dolphin): void
    }

    class Monkey implements Animal {
        public shout() {
            console.log('Ooh oo aa aa!');
        }

        public accept(operation: AnimalOperation) {
            operation.visitMonkey(this);
        }
    }

    class Lion implements Animal {
        public roar() {
            console.log('Roaaar!');
        }

        public accept(operation: AnimalOperation) {
            operation.visitLion(this);
        }
    }

    class Dolphin implements Animal {
        public speak() {
            console.log('Speak!');
        }

        public accept(operation: AnimalOperation) {
            operation.visitDolphin(this);
        }
    }

    class Speak implements AnimalOperation {
        public visitMonkey(monkey: Monkey): void {
            monkey.shout()
        }

        public visitLion(lion: Lion): void {
            lion.roar()
        }

        public visitDolphin(dolphin: Dolphin): void {
            dolphin.speak()
        }
    }

    let monkey = new Monkey()
    let lion = new Lion()
    let dolphin = new Dolphin()

    let speak = new Speak()

    monkey.accept(speak)
    lion.accept(speak)
    dolphin.accept(speak)
}