import styled from '@emotion/styled';

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  gap: 50px;
`;

const LoadingWrap = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const PDFLogoImg = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 23px;
`;
const DropTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
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
  margin-top: 30px;
  position: relative;
`;
const FileSelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;
const DropZone = styled.div<{ fileName: string }>`
  margin: auto;
  display: flex;
  flex-direction: column;
  border: ${({ fileName }) => (fileName ? 'none' : '1px dotted #ccc;')};
  width: 546px;
  height: 165px;
  align-items: center;
  background-color: ${({ fileName }) => (fileName ? 'none' : '#ffffff;')};
`;
const FileInputLabel = styled.label<{ labelWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ labelWidth }) => labelWidth}px;
  max-width: 100%;
  height: 40px;
  background-color: #fcfcfc;
  border-radius: 30px;
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
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled.span`
  font-size: 16px;
  color: red;
  margin: 14px;
`;

const UploadHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
const UploadContent = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 312px;
  width: 684px;
  padding: 36px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e8eaf6;
`;
const UploadPDFStyles = {
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
};
export default UploadPDFStyles;
