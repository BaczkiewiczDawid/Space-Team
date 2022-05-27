import Profile from "components/Dashboard/Profile";
import { Description, PostWrapper } from "components/Dashboard/Post.style";

const Post = ({ img, description, author }) => {
  return (
    <PostWrapper>
      <Profile author={author} dashboard />
      <Description>{description}</Description>
      <img src={img} alt="img" />
    </PostWrapper>
  );
};

export default Post;
