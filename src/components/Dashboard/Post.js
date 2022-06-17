import { useState } from "react";
import Profile from "components/Dashboard/Profile";
import {
  Description,
  PostWrapper,
  PostImage,
} from "components/Dashboard/Post.style";
import heartStrokeIcon from "assets/images/heart-stroke.svg";
import heartStrokeIconWhite from 'assets/images/heart-white.svg';
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
    color: ${({ theme }) => theme.text}
  }
`;

const Post = ({ img, description, author, picture, userID, postID }) => {
  const [likes, setLikes] = useState(null);
  const [isLiked, setIsLiked] = useState(null);
  const userData = {
    userID: userID,
    postID: postID,
  };

  const theme = localStorage.getItem('theme');

  useEffect(() => {
    Axios.post("https://lit-garden-32225.herokuapp.com/api/likes-list", {
      userData: userData,
    }).then((response) => {
      if (isLiked === null) {
        setIsLiked(response.data.length > 0 ? true : false);
      }
    });
  });

  const handleLike = () => {
    if (isLiked) {
      Axios.post("https://lit-garden-32225.herokuapp.com/api/delete-like", {
        userData,
      });
      setIsLiked(false);
    } else {
      Axios.post("https://lit-garden-32225.herokuapp.com/api/add-like", {
        userData: userData,
      });
      setIsLiked(true);
    }

    setLikes(isLiked ? likes - 1 : likes + 1)
  };

  useEffect(() => {
    Axios.post("https://lit-garden-32225.herokuapp.com/api/count-likes", {
      userData: userData,
    }).then((response) => {
      if (likes === null) {
        setLikes(response.data[0].count);
      }
    })
  }, [userData, likes])

  return (
    <PostWrapper>
      <Profile author={author} picture={picture} dashboard />
      <Description>{description}</Description>
      <PostImage src={img} alt="img" />
      <LikesWrapper>
        <img
          src={isLiked ? heartFillIcon : (theme === 'dark' ? heartStrokeIconWhite : heartStrokeIcon)}
          alt="heart"
          onClick={handleLike}
        />
        <p>{likes} People like it</p>
      </LikesWrapper>
    </PostWrapper>
  );
};

export default Post;
