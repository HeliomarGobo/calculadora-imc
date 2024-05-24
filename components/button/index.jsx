import { Link } from "expo-router";
import { ButtonContainer, ButtonText} from './styles'

const Button = ({href, label}) => {
  return (
    <Link
      href={href}
      asChild
    >
      <ButtonContainer>
        <ButtonText>{label}</ButtonText>
      </ButtonContainer>
    </Link>
  );
};
 export default Button;