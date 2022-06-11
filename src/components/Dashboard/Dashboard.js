import { useState } from "react";
import Navigation from "components/Navigation/Navigation";
import PostsList from "components/Dashboard/PostsList";
import NewPost from "components/Dashboard/NewPost";
import {
  DashboardWrapper,
  Wrapper,
  Switch,
  Slider,
} from "components/Dashboard/Dashboard.style";
import Logo from "components/Dashboard/Logo";
import useAuthenticate from "hooks/useAuthenticate";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";

const Dashboard = ({ toggleTheme, theme }) => {
  const isAuthenticated = useLocalStorageAuthenticate();

  useAuthenticate(isAuthenticated);

  const [isChecked, setIsChecked] = useState(true);

  return (
    <DashboardWrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Wrapper>
        <Logo theme={theme} />
        <Switch onClick={toggleTheme}>
          <input type="checkbox" onClick={() => setIsChecked(!isChecked)} isChecked={isChecked} />
          <Slider isChecked={isChecked}></Slider>
        </Switch>
        <NewPost
          loggedUser={isAuthenticated.loggedUser}
          userID={isAuthenticated.id}
        />
        <PostsList />
      </Wrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
