import styled from '@emotion/styled';

import React, { useState } from 'react';
import { instance } from '../../api/api';
import LoadingIndicator from './LoadingIndicator';

const UplodPDF = () => {
  const [PDFfile, setPDFfile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPDFfile(event.target.files ? event.target.files[0] : null);
  };

  const onFileUpload = async () => {
    if (!PDFfile) {
      console.log('PDF 파일이 선택되지 않았습니다.');
      return;
    }
    setIsUploading(true);

    const formData = new FormData();

    if (PDFfile instanceof File)
      formData.append('multipartFile', PDFfile as File, encodeURIComponent(PDFfile.name));
    console.log('서버 pdf 요청 ');

    try {
      const response = await instance.post('api/pdfupload', formData, {});

      console.log(response.data);
    } catch (error) {
      // 필요하다면 사용자에게 에러 메시지를 표시합니다.
      console.error('파일 업로드 실패: ', error);
    } finally {
      setIsUploading(false); // 파일 업로드 요청이 종료됨을 표시
    }
  };
  const handledDeletePDFfile = (): void => {
    setPDFfile(null);

    console.error('삭제: ', PDFfile);
  };
  return (
    <>
      <h1>PDF 업로드</h1>
      {}
      <input type="file" onChange={onFileChange} disabled={isUploading} />
      <Button onClick={handledDeletePDFfile}>삭제</Button>
      <Button onClick={onFileUpload} disabled={isUploading}>
        업로드
      </Button>
      <LoadingIndicator />
    </>
  );
};

export default UplodPDF;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
