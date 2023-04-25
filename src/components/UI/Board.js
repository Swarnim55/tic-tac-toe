import React from 'react';
import './Board.css';
import Box from './Box';
const Board = ({ list, onClick }) => {
  return (
    <div className="board">
      {list.map((item, index) => {
        return (
          <Box value={item} onClick={() => item === null && onClick(index)} />
        );
      })}
    </div>
  );
};

export default Board;
