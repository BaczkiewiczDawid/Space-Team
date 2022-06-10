import { StyledLogo } from "components/Dashboard/Logo.style";
import logo from "assets/images/logo.svg";
import whiteLogo from 'assets/images/logo-white.svg'

const Logo = ({ theme }) => {
  return <StyledLogo src={theme === 'light' ? logo : whiteLogo} alt='space-team' />;
};

export default Logo;
