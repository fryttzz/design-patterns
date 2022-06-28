namespace facadePattern {
    class Computer {
        public getElecticShock() {
            console.log('Ouch!');
        }

        public makeSound() {
            console.log('Beep beep!');
        }

        public showLoadingScreen() {
            console.log('Loading...');
        }

        public bam() {
            console.log('Ready to be used!');
        }

        public closeEverything() {
            console.log('Bup bup bup buzzzz!');
        }

        public sooth() {
            console.log('Zzzzz');
        }

        public pullCurrent() {
            console.log('Haaah!');
        }
    }
    
    class ComputerFacade {
        protected computer

        public constructor(computer: Computer) {
            this.computer = computer
        }

        public turnOn() {
            this.computer.getElecticShock()
            this.computer.makeSound()
            this.computer.showLoadingScreen()
            this.computer.bam()
        }

        public turnOf() {
            this.computer.closeEverything()
            this.computer.pullCurrent()
            this.computer.sooth()
        }
    }

    let computer = new ComputerFacade(new Computer())
    computer.turnOn()
    computer.turnOf()
}