import { useState } from "react";
import Profile from "components/Dashboard/Profile";
import {
  Description,
  PostWrapper,
  PostImage,
} from "components/Dashboard/Post.style";
import heartStrokeIcon from "assets/images/heart-stroke.svg";
import heartFillIcon from "assets/images/heart-fill.svg";
import styled from "styled-components";
import Axios from "axios";
import { useEffect } from "react";

const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  img {
    cursor: pointer;
  }

  p {
    margin-left: 1rem;
  }
`;

const Post = ({ img, description, author, picture, userID, postID }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const userData = {
    userID: userID,
    postID: postID,
  };

  useEffect(() => {
    Axios.post("https://lit-garden-32225.herokuapp.com/api/likes-list", {
      userData: userData,
    }).then((response) => {
      setIsLiked(response.data.length > 0 ? true : false);
    });
  });

  const handleLike = () => {
    if (isLiked) {
      Axios.post('http://localhost:5000/api/delete-like', {
        userData,
      }).then((response) => {
        setIsLiked(false);
      })
    } else {
      Axios.post("http://localhost:5000/api/add-like", {
        userData: userData,
      }).then((response) => {
        setIsLiked(true);
      });
    }
  };

  useEffect(() => {
    Axios.post("http://localhost:5000/api/count-likes", {
      userData: userData,
    }).then((response) => {
      setLikes(response.data[0].count);
    });
  });

  return (
    <PostWrapper>
      <Profile author={author} picture={picture} dashboard />
      <Description>{description}</Description>
      <PostImage src={img} alt="img" />
      <LikesWrapper>
        <img
          src={isLiked ? heartFillIcon : heartStrokeIcon}
          alt="heart"
          onClick={handleLike}
        />
        <p>{likes} People like it</p>
      </LikesWrapper>
    </PostWrapper>
  );
};

export default Post;
