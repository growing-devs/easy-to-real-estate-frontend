/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

interface PrimaryModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  height?: number;
}

const PrimaryModal = ({
  children = null,
  isOpen,
  onClose,
  width = 400,
  height = 400,
}: PrimaryModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent width={width} height={height} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

PrimaryModal.defaultProps = {
  width: 400,
  height: 400,
};
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export default PrimaryModal;
