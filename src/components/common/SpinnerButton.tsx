import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import checkmark from '../../assets/Pdf/checkmark.svg';

interface Props {
  isUploading: boolean;
  filename?: string;
}

const SpinnerButton: React.FC<Props> = ({ isUploading, filename }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  // 스피너 완료 상태를 시뮬레이션하기 위한 함수
  const simulateCompletion = () => {
    setIsCompleted(false);

    setTimeout(() => {
      setIsCompleted(true);
    }, 2000); // 2초 후에 완료 상태로 변경
  };
  // 새로운 파일이 들어왔을때를 감지해 2초간 동작
  useEffect(() => {
    if (filename) {
      simulateCompletion();
    }
  }, [filename]);

  return (
    <SpinnerContainer isCompleted={isCompleted}>
      {!isCompleted ? <StyledSpinner isUploading={isUploading} /> : null}
    </SpinnerContainer>
  );
};

SpinnerButton.defaultProps = {
  filename: '',
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<{ isUploading: boolean }>`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 1s linear infinite;
  animation-play-state: ${({ isUploading }) => (isUploading ? 'running' : 'running')};
`;

const SpinnerContainer = styled.div<{ isCompleted: boolean }>`
  background-color: ${({ isCompleted }) => (isCompleted ? 'transparent' : 'red')};
  ${({ isCompleted }) =>
    isCompleted &&
    `
      background-image: url(${checkmark});
      background-position: center;
      background-size: cover;
    `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  /* transition: background-color 0.3s ease-in-out; // 배경색 변경에 대한 transition 속성 추가 */
`;

export default SpinnerButton;
