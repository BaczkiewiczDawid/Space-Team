import { StyledProfile, Picture, StyledProfilePicture } from 'components/Dashboard/Profile.style';

const Profile = ({ dashboard, author, search, picture, className, onClick }) => {
  return (
    <StyledProfile dashboard={dashboard} search={search} className={className} onClick={onClick}>
      <Picture dashboard={dashboard}>
        <StyledProfilePicture src={picture} alt="profile" />
      </Picture>
      {author && <p>{author}</p>}
    </StyledProfile>
  );
};

export default Profile;
