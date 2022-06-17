import { StyledBurger } from 'components/Navigation/BurgerMenu.style';

const BurgerMenu = ({ handleMenu, isOpen }) => {
  const theme = localStorage.getItem('theme');

    return (
        <StyledBurger onClick={handleMenu} open={isOpen} dark={theme === 'dark' ? 1 : 0}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

export default BurgerMenu;