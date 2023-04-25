import React from 'react';
import './Box.css';
const Box = (props) => {
  const style = props.value === 'X' ? 'box X' : 'box O';
  return (
    <button className={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Box;
