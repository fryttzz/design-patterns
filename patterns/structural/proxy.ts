namespace proxyPattern {
    interface Door {
        open(): void
        close(): void
    }

    class LabDoor implements Door {
        public open(): void {
            console.log('Opening lab door');
        }

        public close(): void {
            console.log('Closing the lab door');
        }
    }

    class SecuredDoor {
        protected door

        public constructor(door: Door) {
            this.door = door
        }

        public open(password: string) {
            if (this.authenticate(password)) {
                this.door.open()
            } else {
                console.log("Big no! It ain't possible");
            }
        }

        public authenticate(password: string) {
            return password === "$ecr@t"
        }

        public close() {
            this.door.close()
        }
    }

    let door = new SecuredDoor(new LabDoor())
    door.open("invalid")

    door.open("$ecr@t")
    door.close()
}