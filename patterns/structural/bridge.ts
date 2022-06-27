namespace bridgePattern {
    interface WebPage {
        getContent(): String
    }

    class About implements WebPage {
        protected theme

        constructor(theme: Theme) {
            this.theme = theme
        }

        getContent() {
            return "About page in " + this.theme.getColor()
        }
    }

    interface Theme {
        getColor(): String
    }

    class DarkTheme implements Theme {
        public getColor() {
            return 'Dark Black';
        }
    }

    let dark = new DarkTheme()
    let about = new About(dark)
    
    console.log(about.getContent());
    
}