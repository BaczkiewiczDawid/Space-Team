import backgroundImage from "assets/images/background.svg";
import logo from "assets/images/logo.svg";
import {
  Big,
  StyledBackground,
  Wrapper,
  Logo,
  Container,
  LinkWrapper,
  StyledLink,
} from "components/Register.style";
import Form from "components/Form";
import { useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();

  return (
    <Big>
      <StyledBackground src={backgroundImage} alt="wild forest" />
      <Wrapper>
        <Logo href="#">
          <img src={logo} alt="space team" />
        </Logo>
        <Container>
          <div></div>
          <LinkWrapper>
            <a href="/login">Sign in</a>
            <a href="/register">Sign up</a>
          </LinkWrapper>
        </Container>
        <Form location={location} />
        {location.pathname === "/register" ? (
          <StyledLink href="/login">
            Already have an account?<span> Login now!</span>
          </StyledLink>
        ) : (
          <StyledLink href="/register">
            Don't have an account?<span> Register now!</span>
          </StyledLink>
        )}
      </Wrapper>
    </Big>
  );
};

export default Register;
