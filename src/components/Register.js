import backgroundImage from "assets/images/background.svg";
import logo from 'assets/images/logo.svg';
import { Big, StyledBackground, Wrapper, Logo, Container, LinkWrapper, StyledForm, StyledButton, StyledLink } from 'components/Register.style'

const Register = () => {
    return (
        <Big>
        <StyledBackground src={backgroundImage} alt="" />
        <Wrapper>
          <Logo href="#">
            <img src={logo} />
          </Logo>
          <Container>
            <div></div>
            <LinkWrapper>
              <a href="">Sign in</a>
              <a href="">Sign up</a>
            </LinkWrapper>
          </Container>
          <StyledForm>
            <input type="text" placeholder="Enter Your username" />
            <input type="text" placeholder="Enter Your password" />
            <input type="text" placeholder="Enter Your email" />
          </StyledForm>
          <StyledButton>SIGN UP</StyledButton>
          <StyledLink href="#">
            Already have an account?<span> Login now!</span>
          </StyledLink>
        </Wrapper>
      </Big>
    )
}

export default Register;