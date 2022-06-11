import { useState, useEffect } from "react";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import {
  Wrapper,
  Title,
  Container,
  SettingsContent,
} from "components/Settings/Settings.style";
import Form from "components/Settings/Form";
import Profile from "components/Settings/Profile";
import useAuthenticate from "hooks/useAuthenticate";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";
import DarkModeSlider from 'components/Settings/DarkModeSlider';

const Settings = ({ theme, toggleTheme }) => {
  const [loggedUserData, setLoggedUserData] = useState("");
  const isAuthenticated = useLocalStorageAuthenticate();

  useAuthenticate(isAuthenticated);
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
        <Logo theme={theme} />
        <Title>Settings</Title>
        <DarkModeSlider toggleTheme={toggleTheme} theme={theme} />
        <SettingsContent>
          <h3>Avatar</h3>
          <Profile loggedUserData={loggedUserData} />
          <Form
            loggedUserData={loggedUserData}
            setLoggedUserData={setLoggedUserData}
          />
        </SettingsContent>
      </Container>
    </Wrapper>
  );
};

export default Settings;
