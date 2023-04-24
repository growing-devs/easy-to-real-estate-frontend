import React, { useState } from 'react';
import ViewPDF from '../../components/Pdf/ViewPDF';
import Upload from '../../components/Pdf/UplodPDF';
import DragAndDrop from '@/components/Pdf/DragAndDrop';

//  업로드 상태변화를 감지하여 페이지를 이동해주는 컴포넌트
const PRA = () => {
  return (
    <>
      <h1>PRA 페이지입니다. 이곳에서 PDF를 업로드해주세요.</h1>
      <Upload />
      <ViewPDF />
      {/* 드래그앤드롭모듈입니다. */}
      <DragAndDrop />
    </>
  );
};

export default PRA;
