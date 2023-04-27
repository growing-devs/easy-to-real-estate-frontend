import styled from '@emotion/styled';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  ButtonType?: 'button' | 'submit' | 'reset';
}

const ButtonCss = styled.button<Props>`
  background-color: ${(props) => (props.disabled ? '#999' : '#FFFFFF')};
  color: #080808;
  border: 0.3px solid #8e8e8e;
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 13px;
  height: max-content;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#999' : '#1A237E')};
    color: #f5f5f5;
  }
`;

const PrimaryButton = ({ onClick, disabled = false, children, ButtonType }: Props) => {
  return (
    <ButtonCss type={ButtonType} onClick={onClick} disabled={disabled} className="PrimaryButton">
      {children}
    </ButtonCss>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  ButtonType: 'button',
  children: 'Click me',
  onClick: () => console.log('Button clicked!'),
};
export default PrimaryButton;
