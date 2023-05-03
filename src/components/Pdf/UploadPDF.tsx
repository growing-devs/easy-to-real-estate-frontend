import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AxiosProgressEvent } from 'axios';
import { instance } from '../../api/api';
import DragAndDrop from './DragAndDrop';
import PDfLogo from '../../assets/Pdf/PdfLogo.svg';
import { PrimaryButton, SpinnerButton, CancelButton, PrimaryModal, LoadingBar } from '../common';
import UplodPDFStyles from './UploadPDFStyles';

const UplodPDF = () => {
  const [PDFfile, setPDFfile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [labelWidth, setLabelWidth] = useState<number>(150);
  const [isModalOpen, setModalIsOpen] = useState(false);

  // 파일 사이즈 할당 mb단위로 ex 30m
  const MAX_FILE_SIZE = 30;

  const calculateMaxFileSize = (sizeInMB: number): number => {
    return sizeInMB * 1024 * 1024;
  };

  const isFileSizeValid = (file: File | null): boolean => {
    return !!file && file.size <= calculateMaxFileSize(MAX_FILE_SIZE);
  };
  // 인풋에 파일을 넣었을 경우 조건 PDF파일이여야 한다
  const isPdfFileType = (file: File | null): boolean => {
    const allowedMimeTypes = ['application/pdf'];
    return !!file && allowedMimeTypes.includes(file.type);
  };
  // 파일크기를 정의 할수있음

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
  const createFormData = (file: File): FormData => {
    const formData = new FormData();
    formData.append('multipartFile', file, file.name);
    return formData;
  };

  // 인풋태그에 파일이 넣어졌을시
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    const maxSize = 104857600; // 100MB
    // 100m 초과하는지 , pdf파일이 맞는지
    if (!isPdfFileType(file) || !isFileSizeValid(file)) {
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
    setModalIsOpen(true);

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
      const response = await instance.post('api/pdfupload', formData, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          console.log('onUploadProgress 호출됨');
          console.log('Upload progressEvent:', progressEvent);
          calculateProgress(progressEvent);
        },
        onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
          console.log('onDownloadProgress 호출됨');
          console.log('onDownload progressEvent:', progressEvent);
          calculateProgress(progressEvent);
        },
      });
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('파일 업로드 실패: ', error);
      throw error;
    } finally {
      setModalIsOpen(false);
    }
  };
  // 리퀘스트 현황 리스폰 현황 퍼센트로 알려주기
  const calculateProgress = (progressEvent: AxiosProgressEvent): void => {
    const { loaded, total } = progressEvent;
    if (total) {
      const progress = Math.round((loaded * 100) / total);
      console.log(`Progress: ${progress}%`);
    } else {
      console.log('Total size is not provided.');
    }
  };
  // pdf 파일 선택 취소 시 초기화
  const handledDeletePDFfile = (): void => {
    setPDFfile(null);
    setFileName('');
    setLabelWidth(150);
  };

  return (
    <UploadContainer>
      <PrimaryModal
        isOpen={isModalOpen}
        onClose={() => setModalIsOpen(false)}
        width={500}
        height={300}
      >
        <ModalContents>
          <h1>모달입니다</h1>
          <p>1분정도 소요됩니다 조금만 기다려주세요.</p>
          <LoadingBar isUploading={isUploading} filename={fileName} />
        </ModalContents>
      </PrimaryModal>
      <UploadHeader>
        <HeaderTitle>등기부등본 파일 첨부</HeaderTitle>
        <Subtitle>{`*단일 PDF(${MAX_FILE_SIZE}MB 이하)만 업로드 가능합니다.`}</Subtitle>
      </UploadHeader>
      <UploadContent>
        <DragAndDrop handleInputFile={onFileChange}>
          <DropZone fileName={fileName}>
            <div>{!fileName && <PDFLogoImg src={PDfLogo} />}</div>
            <FileSelectionWrapper>
              <FileInputLabel labelWidth={labelWidth}>
                <input type="file" onChange={onFileChange} disabled={isUploading} />
                <FileNameSpan className={fileName ? 'typing' : ''}>
                  {fileName || '파일선택'}
                </FileNameSpan>
              </FileInputLabel>
              {!fileName || (
                <>
                  <SpinnerButton isUploading={isUploading} filename={fileName} />
                  <CancelButton onClick={handledDeletePDFfile} disabled={isUploading} />
                </>
              )}
            </FileSelectionWrapper>

            {!fileName ? (
              <DropTitle>또는 여기로 파일을 끌어주세요.</DropTitle>
            ) : (
              <>
                <LoadingWrap>
                  <LoadingBar isUploading={isUploading} filename={fileName} />
                  <div>82%</div>
                  <p>약 몇초 남았습니다.</p>
                </LoadingWrap>
                <UploadButtonWrapper>
                  <PrimaryButton onClick={onFileUpload} disabled={isUploading}>
                    업로드
                  </PrimaryButton>
                </UploadButtonWrapper>
              </>
            )}
          </DropZone>
        </DragAndDrop>
      </UploadContent>
    </UploadContainer>
  );
};

export default UplodPDF;

const {
  UploadContainer,
  UploadHeader,
  HeaderTitle,
  Subtitle,
  UploadContent,
  DropZone,
  FileInputLabel,
  FileNameSpan,
  DropTitle,
  PDFLogoImg,
  LoadingWrap,
  ModalContents,
  FileSelectionWrapper,
  UploadButtonWrapper,
} = UplodPDFStyles;
