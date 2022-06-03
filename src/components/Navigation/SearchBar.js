import { useState, useRef, useEffect } from "react";
import { Wrapper, AccountsList, StyledLink } from "components/Navigation/SearchBar.style";
import Profile from "components/Dashboard/Profile";
import Axios from "axios";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState("");
  const [usersList, setUsersList] = useState([]);

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
  };

  const handleUserData = (e) => {
    setUserData(e.target.value);
  };

  useEffect(() => {
    Axios.post("http://localhost:5000/api/search", {
      userData: userData,
    }).then((response) => {
      setUsersList(response.data);
    });
  }, [userData]);

  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef);

  const handleOpenSearchBar = (e) => {
    setIsOpen(true);
  };

  const handleClearInput = () => {
    setUserData('');
    setIsOpen(false);
  }

  return (
    <Wrapper ref={wrapperRef}>
      <input
        type="text"
        placeholder="Search"
        onClick={handleOpenSearchBar}
        onChange={handleUserData}
        value={userData}
      />
      <AccountsList isOpen={isOpen}>
        {usersList.map((user) => {
          return (
            <StyledLink to={`/profile/${user.id}`} key={user.id} onClick={handleClearInput}>
              <Profile author={user.username} dashboard search />
            </StyledLink>
          );
        })}
      </AccountsList>
    </Wrapper>
  );
};

export default SearchBar;
