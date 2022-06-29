namespace statePattern {
    interface WrittingState {
        write(words: string): void
    }

    class UpperCase implements WrittingState {
        public write(words: string): void {
            console.log(words.toUpperCase());
        }
    }

    class LowerCase implements WrittingState {
        public write(words: string): void {
            console.log(words.toLowerCase());
        }
    }

    class DefaultText implements WrittingState {
        public write(words: string): void {
            console.log(words);
        }
    }

    class TextEditor {
        protected state

        public constructor(state: WrittingState) {
            this.state = state
        }

        public setState(state: WrittingState) {
            this.state = state
        }

        public type(words: string) {
            this.state.write(words)
        }
    }

    let editor = new TextEditor(new DefaultText())

    editor.type("First Line")

    editor.setState(new UpperCase())

    editor.type("Second Line")
    editor.type("Third Line")

    editor.setState(new LowerCase())

    editor.type("Fourth Line")
    editor.type("Fifth Line")
}