import styled from '@emotion/styled';

interface PrimaryButtonProps {
  width?: string;
  height?: string;
}

const PrimaryButton = styled.button<PrimaryButtonProps>`
  border: 0.3px solid #8e8e8e;
  border-radius: 4px;
  font-size: 16px;
  width: ${({ width }) => width ?? '125px'};
  height: ${({ height }) => height ?? '50px'};
  cursor: pointer;
  background-color: #1a237e;
  color: #f5f5f5;

  &:hover {
    background-color: gray;
    color: #ffffff;
  }
`;

export default PrimaryButton;
