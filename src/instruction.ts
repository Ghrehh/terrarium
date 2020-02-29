import Coordinate from 'Coordinate';
import Name from 'entities/Name';

export enum Verb {
  reproduce = 'reproduce'
}

export default interface Instruction {
  entity: Name;
  verb: Verb;
  location: Coordinate;
}
