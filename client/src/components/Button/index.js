import React from 'react';

import './button.scss'

const Button = ({ disabled = false }) => {
  return (<button disabled={disabled} type="submit" className="form-button">Sign In</button>)
}

export default Button;  