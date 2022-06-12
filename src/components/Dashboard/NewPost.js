import { useState } from "react";
import Modal from "components/Dashboard/Modal";
import Input from "components/Dashboard/Input";
import Axios from "axios";

const NewPost = ({ loggedUser, userID }) => {
  const [postDescription, setPostDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      setIsModalOpen(true);
    }
  };

  const handlePublicPost = (e) => {
    if (imageURL !== "") {
      setIsModalOpen(false);

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
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        postDescription={postDescription}
        userID={userID}
        onChange={handleImageValue}
        onClick={handlePublicPost}
        title="Almost done"
      />
    </>
  );
};

export default NewPost;
