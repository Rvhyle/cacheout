import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Assets/loadingData.json';
import './LoadingAnimation_styled.scss';

const LoadingAnimation: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className='loading-animation'>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LoadingAnimation;
