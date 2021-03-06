import Navigation from "components/Navigation/Navigation";
import PostsList from "components/Dashboard/PostsList";
import NewPost from "components/Dashboard/NewPost";
import {
  DashboardWrapper,
  Wrapper,
} from "components/Dashboard/Dashboard.style";
import Logo from "components/Dashboard/Logo";
import useAuthenticate from "hooks/useAuthenticate";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";

const Dashboard = ({ theme }) => {
  const isAuthenticated = useLocalStorageAuthenticate();

  useAuthenticate(isAuthenticated);

  return (
    <DashboardWrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Wrapper>
        <Logo theme={theme} />
        <NewPost
          loggedUser={isAuthenticated.loggedUser}
          userID={isAuthenticated.id}
        />
        <PostsList userID={isAuthenticated.id} />
      </Wrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
