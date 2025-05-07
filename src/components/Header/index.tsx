import { Container, Logo, InfoIcon, LogoButton, InfoButton } from "./styles";
import logoImg from '@assets/pre-logo.png';

export function Header() {
  return (
    <Container>
        <LogoButton>
            <Logo source={logoImg} />    
        </LogoButton>

        <InfoButton>
            <InfoIcon />
        </InfoButton>

    </Container>
  );
}