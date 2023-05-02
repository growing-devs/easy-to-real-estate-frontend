import styled from '@emotion/styled';
import React, { useState, useRef, useEffect } from 'react';
import { instance } from '../../api/api';
import LoadingIndicator from './LoadingIndicator';
import DragAndDrop from '../Pdf/DragAndDrop';
import PDfLogo from '../../assets/Pdf/PdfLogo.png';
import { PrimaryButton, SpinnerButton, CancelButton } from '../common';

const UplodPDF = () => {
  const [PDFfile, setPDFfile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [labelWidth, setLabelWidth] = useState<number>(150);

  console.log('랜더링');

  // 인풋에 파일을 넣었을 경우 조건 PDF파일이여야 한다
  const validateFileType = (file: File | null): boolean => {
    const allowedMimeTypes = ['application/pdf'];
    if (!file || !allowedMimeTypes.includes(file.type)) {
      console.error('PDF 파일이 아닙니다.');
      return false;
    }
    return true;
  };
  // 파일이 pdf 파일이여야하고,파일크기가 100mb 이상이면 안된다

  const validateFileSize = (file: File | null): boolean => {
    if (file && file.size > 104857600) {
      console.error('100메가 이상입니다...', file.size);
      return false;
    }
    return true;
  };

  // 파일명이 30글자를 초과하면 해당글 줄여서 ... 확장자표시
  const truncateFileName = (file: File | null): string => {
    if (!file) return '';

    if (file.name.length > 30) {
      return `${file.name.substring(0, 20)}...${file.name.slice(-3)}`;
    } else {
      return file.name;
    }
  };
  // 폼데이타에 집어넣기 서버와 통신하기 위함 인코딩
  const createFormData = (file: File | null): FormData | null => {
    if (!file || !(file instanceof File)) return null;

    const formData = new FormData();
    formData.append('multipartFile', file, encodeURIComponent(file.name));
    return formData;
  };
  // 인풋태그에 파일이 넣어졌을시
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    // 100m 초과하는지 , pdf파일이 맞는지
    if (!validateFileType(file) || !validateFileSize(file)) {
      setFileName('');
      setPDFfile(null);
      setLabelWidth(150);
      event.target.value = '';

      return;
    }
    // css 에 보여지는 부분 가로사이즈 증가 , 변경된 파일이름
    const updatedFileName = truncateFileName(file);
    const updatedLabelWidth = updatedFileName.length * 14;
    setFileName(updatedFileName);
    setPDFfile(file);
    setLabelWidth(updatedLabelWidth);
    event.target.value = '';
  };
  // 파일 업로드 부분
  const onFileUpload = async () => {
    if (!PDFfile) {
      console.log('PDF 파일이 선택되지 않았습니다.');
      return;
    }
    setIsUploading(true);

    const formData = createFormData(PDFfile);
    if (!formData) return;

    try {
      await uploadFileToServer(formData);
    } catch (error) {
      // 에러 처리는 필요에 따라 구현
    } finally {
      setIsUploading(false);
    }
  };

  // 서버 전송 하기위한 비동기 처리
  const uploadFileToServer = async (formData: FormData): Promise<any> => {
    try {
      const response = await instance.post('api/pdfupload', formData, {});
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('파일 업로드 실패: ', error);
      throw error;
    }
  };
  // pdf 파일 선택 취소 시 초기화
  const handledDeletePDFfile = (): void => {
    setPDFfile(null);
    setFileName('');
    setLabelWidth(150);
    console.log('삭제: ', PDFfile);
  };

  return (
    <UploadContainer>
      <UploadHeader>
        <HeaderTitle>
          <img alt="pdflogo" src={PDfLogo} />
          <span>등기부등본 파일 첨부</span>
        </HeaderTitle>
        <Subtitle>*단일 PDF(100MB 이하)만 업로드 가능합니다.</Subtitle>
      </UploadHeader>
      <UploadContent>
        <DropZone fileName={fileName}>
          <DragAndDrop handleInputFile={onFileChange}>
            <FileSelectionWrapper>
              <FileInputLabel labelWidth={labelWidth}>
                <input type="file" onChange={onFileChange} disabled={isUploading} />
                <FileNameSpan className={fileName ? 'typing' : ''}>
                  {fileName || '파일선택'}
                </FileNameSpan>
              </FileInputLabel>
              {!fileName || (
                <>
                  <SpinnerButton />
                  <CancelButton onClick={handledDeletePDFfile} disabled={isUploading} />
                </>
              )}
            </FileSelectionWrapper>
            {!fileName ? (
              <DropTitle>또는 여기로 파일을 끌어주세요.</DropTitle>
            ) : (
              <UploadButtonWrapper>
                <PrimaryButton onClick={onFileUpload} disabled={isUploading}>
                  업로드
                </PrimaryButton>
              </UploadButtonWrapper>
            )}
          </DragAndDrop>
        </DropZone>

        {/* <LoadingIndicator /> */}
      </UploadContent>
    </UploadContainer>
  );
};

export default UplodPDF;

const DropTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 60px;
`;
const FileNameSpan = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  &.typing {
    max-width: 0;
    animation: typing 0.7s steps(40, end) forwards;
    border-right: 2px solid #000;
  }

  @keyframes typing {
    from {
      max-width: 0;
    }
    to {
      max-width: 100%;
    }
  }
`;

const UploadButtonWrapper = styled.div`
  margin: 7px;
  position: relative;
  bottom: 20px;
`;
const FileSelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 70px;

  gap: 7px;
`;
const DropZone = styled.div<{ fileName: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${({ fileName }) => (fileName ? 'none' : '1px dotted #ccc;')};

  width: 100%;
  height: 370px;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;
const FileInputLabel = styled.label<{ labelWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ labelWidth }) => labelWidth}px;
  max-width: 100%;
  height: 60px;
  background-color: #fcfcfc;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #8e8e8e;
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

  transition: width 0.3s ease-in-out;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  margin-top: 30px;
`;

const Subtitle = styled.span`
  margin-top: 30px;
  color: red;
`;

const UploadHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
const UploadContent = styled.div`
  margin-top: 50px;
  padding-left: 120px;
  padding-right: 120px;
`;

const UploadContainer = styled.div`
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
