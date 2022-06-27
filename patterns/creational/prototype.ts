namespace prototypePattern {
    class Sheep {
        protected name: String = ""
        protected category: String = ""

        public constructor(name: String, category: String = "Mountain Sheep") {
            this.name = name
            this.category = category
        }

        public setName(name: String) {
            this.name = name
        }

        public getName() {
            return this.name
        }

        public setCategory(category: String) {
            this.category = category
        }

        public getCategory() {
            return this.category
        }
    }

    let original = new Sheep("Jolly")
    console.log(original.getName());
    console.log(original.getCategory());

    let cloned = Sheep.prototype
    cloned.setName("Dolly")
    console.log(cloned.getName())
    console.log(cloned.getCategory())
}