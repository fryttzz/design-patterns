namespace simpleFactory {
    interface Door {
        getWidth(): Number;
        getHeight(): Number;
    }

    class WoodenDoor implements Door {
        width: Number = 0;
        height: Number = 0;

        public constructor(width: Number, height: Number) {
            this.width = width;
            this.height = height;
        }
        public getWidth(): Number {
            return this.width;
        }

        public getHeight(): Number {
            return this.height;
        }
    }

    class DoorFactory {
        public static makeDoor(width: Number, height: Number): Door {
            return new WoodenDoor(width, height)
        }
    }

    let door = DoorFactory.makeDoor(100, 200)

    console.log('Width: ', door.getWidth());
    console.log('Width: ', door.getWidth());

}
