import { StyledBurger } from 'components/BurgerMenu.style';

const BurgerMenu = ({ handleMenu, isOpen }) => {
    return (
        <StyledBurger onClick={handleMenu} open={isOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
}

export default BurgerMenu;