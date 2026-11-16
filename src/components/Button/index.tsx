
import { ButtonContainer } from './styles';


interface IButtonProps {
  title: string;
  disabled?: boolean;
}

const Button = ({ title, disabled }: IButtonProps) => {
  return (
    <ButtonContainer
      type="button"
      disabled={disabled}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
