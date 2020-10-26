import React from 'react';
import LiveChatLogo from "../../assets/logo/livechat_logo.svg";
import { ReactComponent as UserLoggedIco } from '../../assets/check-mark.svg';
import Button from '../Button';
import { signOut } from '../../actions';
import { connect } from 'react-redux';
import './mainContent.scss';

const MainContent = ({ signOut }) => {
  return (
    <div className="logged-content-container">
      <img className='logo' src={LiveChatLogo} alt="" />
      <div className="content-info">
        <UserLoggedIco width={30} height={30} />
        <h1>User Logged in</h1>
      </div>
        <Button text="Sign Out" onClick={signOut} />
    </div>
  )
}

export default connect(null, { signOut })(MainContent);