import React from 'react';
import { connect } from 'react-redux';
import FormInfo from '../FormInfo';
import LoginForm from '../LoginForm';
import MainContent from '../MainContent';
import './contentCard.scss';

const ContentCard = ({ isSignedIn }) => {
  return (
    <div className="form-card-container">
      {isSignedIn ? (<MainContent />) :
        (<>
          <LoginForm />
          <FormInfo />
        </>)
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state
})
export default connect(mapStateToProps)(ContentCard);