export enum Verb {
  Reproduce
}

export default interface Instruction {
  entity: string;
  verb: Verb;
  location: { x: number; y: number };
}
