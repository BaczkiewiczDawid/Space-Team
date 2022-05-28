import Navigation from "components/Navigation/Navigation";
import PostsList from "components/Dashboard/PostsList";
import NewPost from "components/Dashboard/NewPost";
import { DashboardWrapper, Wrapper, Logo } from "components/Dashboard/Dashboard.style";
import logo from "assets/images/logo.svg";


const Dashboard = ({ loggedUser }) => {
  return (
    <DashboardWrapper>
      <Navigation loggedUser={loggedUser} />
      <Wrapper>
        <Logo src={logo} alt="space team" />
        <NewPost loggedUser={loggedUser} />
        <PostsList />
      </Wrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
