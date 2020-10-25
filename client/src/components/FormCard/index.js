import React from 'react';
import './formCard.scss';
import FormInfo from '../FormInfo';
import LoginForm from '../LoginForm';

const FormCard = () => {
  return (
    <div className="form-card-container">
      <LoginForm />
      <FormInfo />
    </div>
  )
}

export default FormCard;