namespace templateMethodPattern {
    abstract class Builder {
        public build() {
            this.test()
            this.lint()
            this.assemble()
            this.deploy()
        }

        public abstract test(): void
        public abstract lint(): void
        public abstract assemble(): void
        public abstract deploy(): void
    }

    class AndroidBuilder extends Builder {
        public test(): void {
            console.log('Running Android Tests');
        }

        public lint(): void {
            console.log('Linting the android code');
        }

        public assemble(): void {
            console.log('Assembling the android build');
        }

        public deploy(): void {
            console.log('Deploying android build to server');
        }
    }

    class IosBuilder extends Builder {
        public test(): void {
            console.log('Running IOS Tests');
        }

        public lint(): void {
            console.log('Linting the IOS code');
        }

        public assemble(): void {
            console.log('Assembling the IOS build');
        }

        public deploy(): void {
            console.log('Deploying IOS build to server');
        }
    }

    let androidBuilder = new AndroidBuilder()
    androidBuilder.build();
    // Output:
    // Running android tests
    // Linting the android code
    // Assembling the android build
    // Deploying android build to server

    let iosBuilder = new IosBuilder()
    iosBuilder.build();
    // Output:
    // Running ios tests
    // Linting the ios code
    // Assembling the ios build
    // Deploying ios build to server
}