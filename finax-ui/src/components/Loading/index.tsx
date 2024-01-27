import React from 'react';
import { LoadingContainer } from './style';
import Logo from '../../assets/images/icon-logo.svg';

function Loading() {

  return (
    <LoadingContainer>
      <img src={Logo} alt="Logo" />
      <p>
        Please wait a moment
        <br />
        we are processing your request...
      </p>
    </LoadingContainer>
  );
}

export default Loading;
