import React from 'react';

import './button.scss'

const Button = ({ disabled = false, text = 'Button', type = "button", onClick }) => {
  return (<button type={type} disabled={disabled} onClick={onClick} className="form-button">{text}</button>)
}

export default Button;  