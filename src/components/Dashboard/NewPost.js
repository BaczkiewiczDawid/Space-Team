import { useState } from "react";
import { Input } from "components/Dashboard/NewPost.style";

const NewPost = ({ loggedUser }) => {
  const [postDescription, setPostDescription] = useState("");

  const handleSetDescription = (e) => {
    setPostDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      e.target.value = "";
    }
  };

  return (
    <Input
      type="text"
      placeholder="What's on Your mind?"
      onKeyDown={handleKeyDown}
      onChange={handleSetDescription}
    />
  );
};

export default NewPost;
