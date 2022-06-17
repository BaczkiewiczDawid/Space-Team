import { useState, useEffect } from "react";
import { Wrapper, PostsContainer } from "components/Dashboard/PostsList.style";
import Post from "components/Dashboard/Post";
import Axios from "axios";
import Loading from 'components/Dashboard/Loading';

const PostsList = ({ userID }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://lit-garden-32225.herokuapp.com/api/posts").then((response) => {
      setPosts(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Wrapper>
      <PostsContainer>
        {isLoading && <Loading />}
        {posts.map((el, index) => {
          return (
            <Post
              key={index}
              postID={el.postID}
              author={el.username}
              description={el.description}
              img={el.img}
              picture={el.picture}
              userID={userID}
            />
          );
        })}
      </PostsContainer>
    </Wrapper>
  );
};

export default PostsList;
