import { useEffect, useState } from "react";
import useAuthenticate from "hooks/useAuthenticate";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import {
  Wrapper,
  Container,
  FriendsListContainer,
} from "components/FriendsList/FriendsList.style";
import Friend from "components/FriendsList/Friend";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";

const FriendsList = () => {
  const [friendsArray, setFriendsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const isAuthenticated = useLocalStorageAuthenticate();

  useAuthenticate(isAuthenticated);

  const theme = localStorage.getItem('theme');

  useEffect(() => {
    Axios.post("https://lit-garden-32225.herokuapp.com/api/friends-list", {
      userData: isAuthenticated.id,
    }).then((response) => {
      setFriendsArray(response.data);
      setIsLoading(false);
    });
  }, [isAuthenticated.id]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Container>
        <Logo theme={theme} />
        {isLoading && <p>Loading ...</p>}
        <FriendsListContainer>
          {friendsArray.map((friend) => {
            return <Friend friend={friend} />;
          })}
        </FriendsListContainer>
      </Container>
    </Wrapper>
  );
};

export default FriendsList;
