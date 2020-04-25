import React from 'react';
import './button.scss';

const Button = ({ children, disabled, ...rest }) => {
  const className = `button ${disabled ? 'disabled' : ''}`;

  return <button {...{ className, ...rest }}>{children}</button>;
};

export default Button;
