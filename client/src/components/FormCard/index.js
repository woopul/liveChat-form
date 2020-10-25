import React from 'react';
import './formCard.scss';
import FormInfo from '../FormInfo';
import LoginForm from '../LoginForm';

const FormCard = () => {
  return (
    <div className="form-card-container">
      <FormInfo />
      <LoginForm />
    </div>
  )
}

export default FormCard;