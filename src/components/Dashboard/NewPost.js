import { useState } from "react";
import { Input } from "components/Dashboard/NewPost.style";
import Axios from 'axios';

const NewPost = ({ loggedUser }) => {
  const [postDescription, setPostDescription] = useState("");

  const handleSetDescription = (e) => {
    setPostDescription(e.target.value);
  };

  const handlePublicPost = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      e.target.value = "";

      const newPost = {
        author: loggedUser,
        description: postDescription,
        img: 'https://images.unsplash.com/photo-1653624824808-e1597cf459a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'
      }

      Axios.post('http://localhost:5000/api/new-post', {
        newPost: newPost
      }).then(() => {
        console.log('new post added');
      });
    }
  };

  return (
    <Input
      type="text"
      placeholder="What's on Your mind?"
      onKeyDown={handlePublicPost}
      onChange={handleSetDescription}
    />
  );
};

export default NewPost;
