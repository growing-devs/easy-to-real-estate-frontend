import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 1s linear infinite;
`;

const Checkmark = styled.div`
  border: 3px solid white;
  border-top: 0;
  border-right: 0;
  transform: rotate(-45deg);
  transform-origin: 25%25%;
`;
const SpinnerButton: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  // 스피너 완료 상태를 시뮬레이션하기 위한 함수
  const simulateCompletion = () => {
    setTimeout(() => {
      setIsCompleted(true);
    }, 3000); // 3초 후에 완료 상태로 변경
  };

  // 컴포넌트가 마운트되면 완료 상태를 시뮬레이션합니다.
  React.useEffect(() => {
    simulateCompletion();
  }, []);

  return <SpinnerContainer>{isCompleted ? <Checkmark /> : <Spinner />}</SpinnerContainer>;
};

export default SpinnerButton;
