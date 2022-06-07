import { StyledProfile, Picture, StyledProfilePicture } from 'components/Dashboard/Profile.style';

const Profile = ({ dashboard, author, search, picture, className }) => {
  return (
    <StyledProfile dashboard={dashboard} search={search} className={className}>
      <Picture dashboard={dashboard}>
        <StyledProfilePicture src={picture} alt="profile" />
      </Picture>
      <p>{author}</p>
    </StyledProfile>
  );
};

export default Profile;
