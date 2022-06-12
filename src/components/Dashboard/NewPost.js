import { useState } from "react";
import Modal from "components/Dashboard/Modal";
import Input from "components/Dashboard/Input";
import Axios from "axios";

const NewPost = ({ loggedUser, userID }) => {
  const [postDescription, setPostDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleImageValue = (e) => {
    setImageURL(e.target.value);
  };

  const handleSetDescription = (e) => {
    setPostDescription(e.target.value);
  };

  const handleOpenModal = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      e.target.value = "";

      setIsOpen(true);
    }
  };

  const handlePublicPost = (e) => {
    if (imageURL !== "") {
      setIsOpen(false);

      const newPost = {
        author: userID,
        description: postDescription,
        img: imageURL,
      };

      Axios.post("http://localhost:5000/api/new-post", {
        newPost: newPost,
      }).then(() => {
        console.log("new post added");
      });
    } else {
      alert("Cant be empty");
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="What's on Your mind?"
        onKeyDown={handleOpenModal}
        onChange={handleSetDescription}
        maxLength="200"
        primary
      />
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          postDescription={postDescription}
          userID={userID}
          onChange={handleImageValue}
          onClick={handlePublicPost}
          title="Almost done"
        />
      ) : null}
    </>
  );
};

export default NewPost;
