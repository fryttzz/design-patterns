namespace chainOfResponsabilityPattern {
    abstract class Account {
        protected successor: Account | undefined
        protected balance: number = 0

        public setNext(account: Account) {
            this.successor = account
        }

        public pay(amountToPay: number) {
            if (this.canPay(amountToPay)) {
                console.log("Paid %s using %s");
            } else if (this.successor) {
                console.log('Cannot pay using %s. Proceeding...');
                this.successor.pay(amountToPay)
            } else {
                throw new Error("None of the account have enough balance")
            }
        }

        public canPay(amount: number): boolean {
            return this.balance >= amount;
        }
    }

    class Bank extends Account {
        protected balance: number = 0;

        public constructor(balance: number) {
            super();
            this.balance = balance
        }
    }

    class Paypal extends Account {
        protected balance: number = 0;

        public constructor(balance: number) {
            super();
            this.balance = balance
        }
    }

    class Bitcoin extends Account {
        protected balance: number = 0;

        public constructor(balance: number) {
            super();
            this.balance = balance
        }
    }

    let bank = new Bank(100)
    let paypal = new Paypal(200)
    let bitcoin = new Bitcoin(300)

    bank.setNext(paypal)
    paypal.setNext(bitcoin)

    bank.pay(259)
}