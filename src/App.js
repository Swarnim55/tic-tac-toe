import React, { useState } from 'react';
import './App.css';

import Board from './components/UI/Board';
import ScoreBoard from './components/score/ScoreBoard';
import Button from './components/UI/Button';
const App = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const onClickHandler = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return player === true ? 'X' : 'O';
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setBoard(updatedBoard);
    player ? setPlayer(false) : setPlayer(true);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <>
      <ScoreBoard scores={scores} player={player} />

      <Board list={board} onClick={gameOver ? resetBoard : onClickHandler} />

      <Button resetBoard={resetBoard} value="Reset Board" />
    </>
  );
};

export default App;
