namespace iteratorPattern {
    class RadioStation {
        protected frequency

        public constructor(frequency: number) {
            this.frequency = frequency
        }

        public getFrequency(): number {
            return this.frequency
        }
    }

    class StationList {
        protected stations: RadioStation[] = []
        protected counter: number = 0

        public addStation(station: RadioStation) {
            this.stations.push(station)
        }

        public removeStation(toRemove: RadioStation) {
            let toRemoveFrequency = toRemove.getFrequency()
            this.stations.filter((station) => station.getFrequency() !== toRemoveFrequency)
        }

        public count(): number {
            return this.stations.length
        }

        public current(): RadioStation {
            return this.stations[this.counter];
        }

        public key() {
            return this.counter;
        }

        public next() {
            this.counter++;
        }

        public rewind() {
            this.counter = 0;
        }

        public valid(): Boolean {
            if (this.stations[this.counter]) {
                return true
            } else {
                return false
            }
        }
    }

    let stationList = new StationList()

    stationList.addStation(new RadioStation(89))
    stationList.addStation(new RadioStation(101))
    stationList.addStation(new RadioStation(102))
    stationList.addStation(new RadioStation(103.2))

    console.log(stationList);
    
    stationList.removeStation(new RadioStation(89))
}

