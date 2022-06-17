import { StyledLogo } from "components/Dashboard/Logo.style";
import logo from "assets/images/logo.svg";
import whiteLogo from 'assets/images/logo-white.svg'

const Logo = ({ theme }) => {
  const logoImg = theme === 'light' ? logo : whiteLogo;

  return <StyledLogo src={logoImg} alt='space-team' />;
};

export default Logo;
