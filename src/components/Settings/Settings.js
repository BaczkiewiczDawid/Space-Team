import { useState, useEffect } from "react";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import {
  Wrapper,
  Title,
  Container,
  SettingsContent,
  Profile,
  Button,
  ProfileWrapper,
} from "components/Settings/Settings.style";

const Settings = ({ isAuthenticated }) => {
  const [loggedUserData, setLoggedUserData] = useState("");
  const userData = isAuthenticated.id;

  useEffect(() => {
    Axios.post("http://localhost:5000/api/get-user", {
      userData: userData,
    }).then((response) => {
      setLoggedUserData(response.data[0]);
    });
    console.log(loggedUserData);
  }, [userData]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Container>
        <Logo />
        <Title>Settings</Title>
        <SettingsContent>
          <h3>Avatar</h3>
          <ProfileWrapper>
            <Profile>
              <img src={loggedUserData.picture} alt="" />
              <div>
                <p>{loggedUserData.username}</p>
                <p>{loggedUserData.email}</p>
              </div>
            </Profile>
            <Button>Upload now</Button>
          </ProfileWrapper>
        </SettingsContent>
      </Container>
    </Wrapper>
  );
};

export default Settings;
