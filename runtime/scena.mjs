export class Failure extends Error {
    constructor(exitCode, message) {
        super(message);
        Object.defineProperty(this, "exitCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: exitCode
        });
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: message
        });
    }
}
//# sourceMappingURL=scena.js.map