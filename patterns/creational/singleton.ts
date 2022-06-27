class President {
    private static instance: President

    private constructor() { }
    public static getInstance(): President {
        if (!President.instance) {
            President.instance = new President()
        }

        return new President
    }

    private __prototype__() { }
}

let president1 = President.getInstance()
let president2 = President.getInstance()

console.log(president1 === president2);
