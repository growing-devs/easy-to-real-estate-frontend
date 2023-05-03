import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  isUploading: boolean;
  filename?: string;
}

const LoadingBar: React.FC<Props> = ({ isUploading, filename }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isUploading) {
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
      }, 30);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isUploading, filename]);
  return (
    <LoadingBarContainer>
      <ProgressBar progress={progress} />
    </LoadingBarContainer>
  );
};

LoadingBar.defaultProps = {
  filename: '',
};
const LoadingBarContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #1a237e;
  border-radius: 8px;
  width: 100%;
  height: 10px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  background-color: #1a237e;
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  transition: width 0.3s ease-in-out;
`;

export default LoadingBar;
