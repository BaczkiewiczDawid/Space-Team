import { StyledProfile, Picture } from 'components/Profile.style';

const Profile = ({ dashboard }) => {
  return (
    <StyledProfile dashboard={dashboard}>
      <Picture dashboard={dashboard} />
      <p>Jhon Doe</p>
    </StyledProfile>
  );
};

export default Profile;
