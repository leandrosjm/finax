import React from 'react';
import { LoadingPagesContainer } from './style';
import { CircularProgress } from '@material-ui/core';
//import FinaxLogo from '../../../assets/images/icon-Finax.svg';

interface LoadingPagesProps {
  height?: string;
}

const LoadingPages: React.FC<LoadingPagesProps> = ({ height }: LoadingPagesProps) => (
  <LoadingPagesContainer height={height}>
    <div>
      {/* <img src={FinaxLogo} alt="Finax Finax company logo" /> */}
      <p>
      <CircularProgress color="primary" />
      </p>
    </div>
  </LoadingPagesContainer>
);

export default LoadingPages;
