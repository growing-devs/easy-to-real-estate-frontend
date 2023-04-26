import styled from '@emotion/styled';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  text?: string;
  ButtonType?: 'button' | 'submit' | 'reset';
}

const ButtonCss = styled.button<Props>`
  background-color: ${(props) => (props.disabled ? '#999' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#999' : '#0069d9')};
  }
`;

const PrimaryButton = ({ onClick, disabled = false, children, text, ButtonType }: Props) => {
  return (
    <ButtonCss type={ButtonType} onClick={onClick} disabled={disabled} className="PrimaryButton">
      {text} {children}
    </ButtonCss>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  text: 'Default Text',
  ButtonType: 'button',
  children: 'Click me',
  onClick: () => console.log('Button clicked!'),
};
export default PrimaryButton;
