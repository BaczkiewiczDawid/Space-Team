import { useState, useRef, useEffect } from "react";
import { Wrapper, AccountsList } from "components/Navigation/SearchBar.style";
import Profile from "components/Dashboard/Profile";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef);

  const handleOpenSearchBar = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <input type="text" placeholder="Search" onClick={handleOpenSearchBar} />
      <AccountsList isOpen={isOpen}>
        <Profile author="Dawid Bączkiewicz" dashboard search />
        <Profile author="Karol Jaki" dashboard search />
        <Profile author="John Doe" dashboard search />
        <Profile author="Dawson B" dashboard search />
        <Profile author="Karol Pal" dashboard search />
      </AccountsList>
    </Wrapper>
  );
};

export default SearchBar;
