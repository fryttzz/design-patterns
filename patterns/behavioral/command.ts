namespace commandPattern {
    //Receiver
    class Bulb {
        public turnOn() {
            console.log('Bulb has been lit');
        }
        public turnOff() {
            console.log('Darkness!');
        }
    }

    interface Command {
        exectute(): void
        undo(): void
        redo(): void
    }

    class TurnOn implements Command {
        protected bulb

        public constructor(bulb: Bulb) {
            this.bulb = bulb
        }

        public exectute(): void {
            this.bulb.turnOn()
        }

        public undo(): void {
            this.bulb.turnOff()
        }

        public redo(): void {
            this.exectute()
        }
    }
    class TurnOff implements Command {
        protected bulb

        public constructor(bulb: Bulb) {
            this.bulb = bulb
        }

        public exectute(): void {
            this.bulb.turnOff()
        }

        public undo(): void {
            this.bulb.turnOn()
        }

        public redo(): void {
            this.exectute()
        }
    }

    class RemoteControl {
        public submit(command: Command) {
            command.exectute()
        }
    }

    let bulb = new Bulb()

    let turnOn = new TurnOn(bulb)
    let turnOff = new TurnOff(bulb)

    let remote = new RemoteControl()
    remote.submit(turnOn)
    remote.submit(turnOff)
}