export interface Scena {
  cwd: string;
  args: Array<string>;
}

export interface Main {
  main(scena: Scena): Promise<void>|void;
}

export class Failure extends Error {
  constructor (public readonly exitCode: number,
	public override readonly message: string) {
    super (message);
  }
}
