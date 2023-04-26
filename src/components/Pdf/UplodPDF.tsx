import styled from '@emotion/styled';
import React, { useState } from 'react';
import { instance } from '../../utils/api';
import LoadingIndicator from './LoadingIndicator';
import PrimaryButton from '../common/PrimaryButton';

const UplodPDF = () => {
  const [PDFfile, setPDFfile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPDFfile(event.target.files ? event.target.files[0] : null);
  };

  // 전송 하기 버튼
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
      console.error('파일 업로드 실패: ', error);
    } finally {
      setIsUploading(false);
    }
  };

  // 파일 선택 취소
  const handledDeletePDFfile = (): void => {
    setPDFfile(null);

    console.error('삭제: ', PDFfile);
  };

  return (
    <UploadWrap>
      <UploadTitle>
        <Title>등기부등본 파일 첨부</Title>
        <Content>*단일 PDF(100MB 이하)만 업로드 가능합니다.</Content>
      </UploadTitle>
      <UploadBox>
        <UploadInput type="file" onChange={onFileChange} disabled={isUploading} />
        <PrimaryButton>파일선택</PrimaryButton>
        <Button onClick={handledDeletePDFfile}>삭제</Button>
        <PrimaryButton onClick={onFileUpload} disabled={isUploading}>
          업로드
        </PrimaryButton>
        {/* <LoadingIndicator /> */}
      </UploadBox>
    </UploadWrap>
  );
};

export default UplodPDF;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;

  margin-top: 30px;
`;

const Content = styled.span`
  margin-top: 30px;
  color: red;
`;

const UploadTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const UploadInput = styled.input``;

const UploadBox = styled.div`
  border: 1px dotted #ccc;
  margin-top: 50px;
  padding: 30px;
`;

const UploadWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin: 20px;
  height: 577px;
  background: #ffffff;
  box-shadow: 0px 0px 21px rgba(232, 232, 232, 0.81);
  border-radius: 32px;
`;
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
