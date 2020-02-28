enum Verb {
  Reproduce
}

interface Instruction {
  entity: string;
  verb: string;
  target: string;
  location: { x: number; y: number };
}
