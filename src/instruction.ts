import Coordinate from 'Coordinate';
import Name from 'entities/Name';

export enum Verb {
  reproduce = 'reproduce',
  die = 'die',
  move = 'move'
}

export default interface Instruction {
  sourceName: Name;
  verb: Verb;
  sourceLocation: Coordinate;
  executorLocation: Coordinate;
  targetLocation: Coordinate;
}
