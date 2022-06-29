namespace mediatorPattern {
    interface ChatRoomMediator {
        showMassage(user: User, message: string): void
    }

    // Mediator
    class ChatRoom implements ChatRoomMediator {
        public showMassage(user: User, message: string) {
            let time = new Date().toLocaleString("pt-br")
            let sender = user.getName()

            console.log(time, "[", sender, "]:", message);
        }
    }

    class User {
        protected name
        protected chatMediator

        public constructor(name: string, chatMediator: ChatRoomMediator) {
            this.name = name
            this.chatMediator = chatMediator
        }

        public getName() {
            return this.name
        }

        public send(message: string) {
            this.chatMediator.showMassage(this, message)
        }
    }

    let mediator = new ChatRoom()

    let john = new User("John Doe", mediator)
    let jane = new User("Jane Doe", mediator)

    john.send("Hello there!")
    jane.send("Sup!")
}

