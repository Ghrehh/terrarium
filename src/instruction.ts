import Coordinate from 'Coordinate';

export interface MoveInstruction {
  start: Coordinate;
  end: Coordinate;
}

export interface DieInstruction {
  entityLocation: Coordinate;
}

export interface ReproduceInstruction {
  entityLocation: Coordinate;
  targetLocation: Coordinate;
}

export type Instruction = MoveInstruction | DieInstruction | ReproduceInstruction
