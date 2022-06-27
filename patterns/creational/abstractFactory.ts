namespace abstractFactory {
    interface Door {
        getDescription(): void
    }
    class WoodenDoor implements Door {
        public getDescription(): void {
            console.log('I am a wooden door')
        }
    }
    class IronDoor implements Door {
        public getDescription(): void {
            console.log('I am an Iron door')
        }
    }

    interface DoorFittingExpert {
        getDescription(): void
    }

    class Welder implements DoorFittingExpert {
        public getDescription(): void {
            console.log('I can only fit iron doors')
        }
    }

    class Carpenter implements DoorFittingExpert {
        public getDescription(): void {
            console.log('I can only fit wooden doors')
        }
    }

    // Wooden factory to return carpenter and wooden door
    interface DoorFactory {
        makeDoor(): Door
        makeFittingExpert(): DoorFittingExpert
    }

    class WoodenDoorFactory implements DoorFactory {
        public makeDoor(): Door {
            return new WoodenDoor()
        }

        public makeFittingExpert(): DoorFittingExpert {
            return new Carpenter()
        }
    }

    // Iron door factory to get iron door and the relevant fitting expert
    class IronDoorFactory implements DoorFactory {
        public makeDoor(): Door {
            return new IronDoor()
        }

        public makeFittingExpert(): DoorFittingExpert {
            return new Welder()
        }
    }

    let woodenFactory = new WoodenDoorFactory()

    let door = woodenFactory.makeDoor()
    let expert = woodenFactory.makeFittingExpert()

    door.getDescription() //Output: I am a wooden door
    expert.getDescription() // Output: I can only fit wooden doors 

    let ironFactory = new IronDoorFactory()

    let door2 = ironFactory.makeDoor()
    let export2 = ironFactory.makeFittingExpert()

    door2.getDescription() //Output: I am a Iron door
    export2.getDescription() // Output: I can only fit Iron doors 
}

