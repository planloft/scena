export interface Scena {
    cwd: string;
    args: Array<string>;
}
export interface Main {
    main(scena: Scena): Promise<void> | void;
}
export declare class Failure extends Error {
    readonly exitCode: number;
    readonly message: string;
    constructor(exitCode: number, message: string);
}
//# sourceMappingURL=scena.d.ts.map