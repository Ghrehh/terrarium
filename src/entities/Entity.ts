import { Instruction } from 'Instruction';

export default abstract class Entity {
  abstract tick(): Instruction[];
}
