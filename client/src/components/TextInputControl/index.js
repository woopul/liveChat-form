import React from 'react';
import './textIputControl.scss'

const TextInputControl = ({ type = 'text', name, handleChange, handleBlur, value, touched, errors }) => {
  return (<>
    <label htmlFor={`${name}Input`}>{name}</label>
    <input
      name={name}
      type={type}
      id={`${name}Input`}
      className={errors[name] && touched[name] && "error-input"}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    />
    {errors[name] && touched[name] && (<p className="error-msg">{errors[name]}</p>)}
  </>)
}

export default TextInputControl;