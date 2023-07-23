import "reflect-metadata";

export class DIContainer {
    private dependencies: Map<string, any> = new Map();
    private static instance: DIContainer;

    private constructor() {}

    static getInstance() {
        if (!this.instance) {
            this.instance = new DIContainer();
        }
        return this.instance;
    }

    register<T>(key: string, dependency: T): void {
        if (!this.dependencies.has(key)) {
            this.dependencies.set(key, dependency);
        } else {
            throw new Error(`Dependency with key '${key}' is already registered.`);
        }
    }

    resolve<T>(target): T {
        const constructor = target.prototype.constructor;
        const dependencies = Reflect.getMetadata("design:paramtypes", constructor) || [];
        if (dependencies.length === 0) {
            return new target();
        }
        const resolvedDependencies: any[] = dependencies.map(dependency => {
            return this.resolve(dependency);
        });

        return new target(...resolvedDependencies);
    }

    toString() {
        return JSON.stringify(this.dependencies);
    }
}
