import SearchIcon from "assets/images/search-icon.svg";
import { Wrapper } from 'components/Navigation/SearchBar.style'

const SearchBar = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Search" />
    </Wrapper>
  );
};

export default SearchBar;
