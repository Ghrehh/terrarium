import React, { useRef, useEffect } from 'react';
import BoardType from 't/Board';

const Stats = ({ board }: { board: BoardType }) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const div = ref.current;
    if (!div) return;

    div.scrollTop = div.scrollHeight;
  });

  return (
    <div style={{ display: 'flex' }}>
      <p>cycle: {board.currentCycle}</p>
      <div ref={ref} style={{ height: '300px', overflow: 'scroll'}}>
        <ul>
          {board.instructions.map((cycle, index) => {
            if (cycle.length === 0) return null;

            return (
              <div>
                <p>Cycle {index}</p>
                {cycle.map((instruction) => (
                  <p>{instruction.constructor.name}{JSON.stringify(instruction)}</p>
                ))}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Stats;
