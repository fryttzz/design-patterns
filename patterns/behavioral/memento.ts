namespace mementoPattern {
    class EditorMemento {
        protected content: string

        public constructor(content: string) {
            this.content = content
        }

        public getContent(): string {
            return this.content
        }
    }

    class Editor {
        protected content = ""

        public type(words: string) {
            this.content = this.content + " " + words
        }

        public getContent() {
            return this.content
        }

        public save() {
            return new EditorMemento(this.content)
        }

        public restore (memento: EditorMemento) {
            this.content = memento.getContent()
        }
    }

    let editor = new Editor()

    editor.type("This is the first sentence.")
    editor.type("This id second.")

    let saved = editor.save()

    editor.type("And this is third")

    console.log(editor.getContent());
    
    editor.restore(saved)
    editor.getContent()
}