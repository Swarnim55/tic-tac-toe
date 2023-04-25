import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className="btn" type="button" onClick={props.resetBoard}>
      {props.value}
    </button>
  );
};

export default Button;
