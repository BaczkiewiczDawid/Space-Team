import logo from "assets/images/logo.svg";
import { Wrapper, Logo, PostsContainer } from "components/Dashboard/PostsList.style";
import Post from "components/Dashboard/Post";
import postsArray from "data/PostsList";

const PostsList = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="space team" />
      <PostsContainer>
        {postsArray.map((el) => {
          return (
            <Post
              author={el.author}
              description={el.description}
              img={el.img}
            />
          );
        })}
      </PostsContainer>
    </Wrapper>
  );
};

export default PostsList;
