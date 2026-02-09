export class Singleton {
    protected static _instance: Singleton;

    protected constructor() {
    }

    public static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

}