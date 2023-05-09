import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface LoadingBarProps {
  start: boolean;
  progress: number;
  type: 'upload' | 'download';
  width?: number;
}

const LoadingBar = ({
  start = false,
  progress = 0,
  type = 'upload',
  width = 400,
}: LoadingBarProps) => {
  const [internalProgress, setInternalProgress] = useState(0);
  useEffect(() => {
    if (start) {
      setInternalProgress(progress);
    } else {
      setInternalProgress(0);
    }
  }, [start, progress]);

  return (
    <LoadingBarWrap>
      <span>총 3분 정도 소요됩니다. 조금만 기다려주세요. </span>

      <LoadingBarContainer width={width}>
        <ProgressBar progress={internalProgress} />
      </LoadingBarContainer>
      <div>{internalProgress}%</div>
      {progress === 100 ? <div>분석이 완료되었습니다.</div> : <div>{type}중 입니다</div>}
    </LoadingBarWrap>
  );
};

LoadingBar.defaultProps = {
  width: 400,
};
const LoadingBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LoadingBarContainer = styled.div<{ width: number }>`
  background-color: #ffffff;
  border: 1px solid #1a237e;
  border-radius: 8px;
  width: ${({ width }) => `${width}px`};

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
