import { useState, useEffect } from "react";
import { Wrapper, PostsContainer } from "components/Dashboard/PostsList.style";
import Post from "components/Dashboard/Post";
import Axios from "axios";

const PostsList = ({ userID }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Wrapper>
      <PostsContainer>
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
