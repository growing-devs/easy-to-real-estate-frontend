import React, { ChangeEvent, DragEvent, FunctionComponent, ReactNode } from 'react';

interface DragAndDropProps {
  handleInputFile: (e: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

const DragAndDrop: FunctionComponent<DragAndDropProps> = ({ handleInputFile, children }) => {
  const onDropFiles = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newEvent: any = { target: { files: e.dataTransfer.files } };
    handleInputFile(newEvent);
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className="DragDrop"
      onDrop={onDropFiles}
      onDragOver={dragOver}
    >
      {children}
    </div>
  );
};

export default DragAndDrop;
