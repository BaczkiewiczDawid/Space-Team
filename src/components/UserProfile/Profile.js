import {
  StyledProfile,
  Picture,
  Details,
  Container,
  Button,
} from "components/UserProfile/Profile.style";
import editIcon from "assets/images/edit-icon.svg";
import plusIcon from "assets/images/plus-icon.svg";

const Profile = ({ isAuthenticated, searchedUser }) => {
  return (
    <StyledProfile>
      <Picture />
      <Details>
        <Container>
          <h2>{searchedUser.username}</h2>
          {isAuthenticated.loggedUser === searchedUser.username ? (
            <img src={editIcon} alt="edit profile" />
          ) : null}
        </Container>
        <Button>
          <img src={plusIcon} alt="plus icon" />
          <p>Add to friends...</p>
        </Button>
      </Details>
    </StyledProfile>
  );
};

export default Profile;
