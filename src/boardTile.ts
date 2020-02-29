import Instruction from 'Instruction';
import Coordinate from 'Coordinate';

interface BoardTile {
  soilFertilized: boolean;
  entity: Entity | null;
}

interface Entity {
  name: string;
  tick(board: BoardTile[][], location: Coordinate): Instruction[];
}

export default BoardTile;
