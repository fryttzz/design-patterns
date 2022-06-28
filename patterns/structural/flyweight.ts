namespace flyweightPattern {
    class KarakTea { }

    class TeaMaker {
        protected availableTea: string[] = []

        public make(preference: string) {
            if (this.availableTea.length === 0) {
                this.availableTea.push(preference) as KarakTea
            }

            return this.availableTea.push(preference)
        }
    }

    class TeaShop {
        protected orders: Number[] = []
        protected teaMaker

        public constructor(teaMaker: TeaMaker) {
            this.teaMaker = teaMaker
        }

        public takeOrder(teaType: string, table: number) {
            this.orders[table] = this.teaMaker.make(teaType)
        }

        public serve() {
            this.orders.forEach((table) => {
                console.log("Serving tea to table #", table);
            })
        }
    }

    let teaMaker = new TeaMaker()
    let shop = new TeaShop(teaMaker)

    shop.takeOrder("less sugar", 1)
    shop.takeOrder("more milk", 2)
    shop.takeOrder("without sugar", 5)

    shop.serve()
}