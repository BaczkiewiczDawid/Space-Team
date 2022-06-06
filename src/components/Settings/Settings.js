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
import Form from 'components/Settings/Form';
import Profile from "components/Settings/Profile";
import Button from "components/Settings/Button";
import useAuthenticate from "hooks/useAuthenticate";

const Settings = () => {
  const [loggedUserData, setLoggedUserData] = useState("");
  const data = localStorage.getItem("isAuthenticated");
  const isAuthenticated = JSON.parse(data);

  useAuthenticate(isAuthenticated);
  const userData = isAuthenticated.id;

  const handleSaveData = () => {
    Axios.post("http://localhost:5000/api/set-data", {
      userData: loggedUserData,
    });
  };

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
          <Profile loggedUserData={loggedUserData} />
          <Form loggedUserData={loggedUserData} setLoggedUserData={setLoggedUserData} />
          <Button secondary="secondary" value="Save" onClick={handleSaveData} />
        </SettingsContent>
      </Container>
    </Wrapper>
  );
};

export default Settings;
