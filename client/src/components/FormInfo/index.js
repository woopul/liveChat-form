import React from 'react';
import LiveChatLogo from "../../assets/logo/livechat_logo.svg";
import './formInfo.scss';

const FormInfo = () => {
  return(
    <div className="form-info-container" >
      <img src={LiveChatLogo} alt=""/>
      <p className="info-text">Understand Better</p>
      <p className="info-text">Communicate Better</p>
    </div>
  )
}

export default FormInfo;