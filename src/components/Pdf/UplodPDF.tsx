import styled from '@emotion/styled';
import React, { useState, useRef, useEffect } from 'react';
import { instance } from '../../utils/api';
import LoadingIndicator from './LoadingIndicator';
import PrimaryButton from '../common/PrimaryButton';
import SpinnerButton from '../common/SpinnerButton';
import CancelButton from '../common/CancleButton';

const UplodPDF = () => {
  const [PDFfile, setPDFfile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [labelWidth, setLabelWidth] = useState<number>(200);

  console.log('랜더링');

  // 인풋에 파일을 넣었을 경우 조건
  // 파일이 pdf 파일이여야하고,파일크기가 100mb 이상이면 안된다
  // 파일명이 30글자를 초과하면 해당글 줄여서 ... 확장자표시
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    console.log(file);

    if (file && file.type !== 'application/pdf') {
      console.error('PDF 파일이 아닙니다.');
      setFileName('');
      setPDFfile(null);
      setLabelWidth(200);
    } else {
      if (file ? file.size > 104857600 : Number) {
        console.error('100메가 이상입니다...', file?.size);
        return;
      }
      let updatedFileName = file?.name ?? '';

      if (file && file.name.length > 30) {
        updatedFileName = `${file.name.substring(0, 20)}...${file.name.slice(-3)}`;
        console.log('30자 초과', updatedFileName);
      } else {
        console.log('30자 미만', updatedFileName);
      }

      const updatedLabelWidth = updatedFileName.length * 14;
      setFileName(updatedFileName);
      setPDFfile(file);
      setLabelWidth(updatedLabelWidth);
      console.log(updatedFileName.length, ' :', updatedLabelWidth);
    }
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
    setFileName('');
    console.error('삭제: ', PDFfile);
  };
  useEffect(() => {
    if (PDFfile === null) {
      console.error('삭제: ', PDFfile);
    }
  }, [PDFfile]);
  return (
    <UploadWrap>
      <UploadTitle>
        <Title>등기부등본 파일 첨부</Title>
        <Content>*단일 PDF(100MB 이하)만 업로드 가능합니다.</Content>
      </UploadTitle>
      <UploadBox>
        <UploadDrop>
          <UploadButtonWrap>
            <UploadLavel labelWidth={labelWidth}>
              <input type="file" onChange={onFileChange} disabled={isUploading} />
              <span>{fileName || '파일선택'}</span>
            </UploadLavel>
            {!fileName || (
              <>
                <SpinnerButton />
                <CancelButton onClick={handledDeletePDFfile} />
              </>
            )}
          </UploadButtonWrap>
          {!fileName && (
            <div>
              <Content>또는 여기로 파일을 끌어주세요</Content>
            </div>
          )}
        </UploadDrop>

        <div>
          {isUploading && (
            <PrimaryButton onClick={onFileUpload} disabled={isUploading}>
              업로드
            </PrimaryButton>
          )}
        </div>
        {/* <LoadingIndicator /> */}
      </UploadBox>
    </UploadWrap>
  );
};

export default UplodPDF;

const UploadButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 70px;

  gap: 7px;
`;
const UploadDrop = styled.div`
  border: 1px dotted #ccc;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const UploadLavel = styled.label<{ labelWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ labelWidth }) => labelWidth}px;
  max-width: 100%;
  height: 50px;
  background-color: #fcfcfc;
  border-radius: 40px;
  border: 1px solid #8e8e8e;
  cursor: pointer;
  font-weight: bold;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background-color: #1a237e;
    color: white;
  }
  & input[type='file'] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
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

const UploadBox = styled.div`
  margin-top: 50px;
  padding-left: 120px;
  padding-right: 120px;
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
