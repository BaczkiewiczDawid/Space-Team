import { useState } from "react";
import {
  StyledForm,
  StyledButton,
  ErrorMessage,
  Input,
} from "components/Login/Form.style";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import InformationModal from "components/InformationModal/InformationModal";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 5) {
    errors.username = "Must be 5 characters or more";
  } else if (values.username.length > 30) {
    errors.username = "Must be 30 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = ({ location, setIsAuthenticated, isAuthenticated }) => {
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState(false);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: formik.values.username,
      email: formik.values.email,
      password: formik.values.password,
    };

    if (location.pathname === "/register") {
      if (!formik.errors.username && !formik.errors.email && !formik.errors.password) {
        Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/register", {
          userData: userData,
        })
          .then(() => {
            setIsSuccess(true);
          })
          .catch((err) => {
            setIsSuccess(false);
          });
  
        setIsInformationModalOpen(true);
  
        setTimeout(() => {
          setIsInformationModalOpen(false);
        }, 2500);
  
        navigate("/login", { replace: true });
      } else {
        setIsInformationModalOpen(true);
        setIsSuccess(false)

        setTimeout(() => {
          setIsInformationModalOpen(false);
        }, 2500);
      }
    } else {
      Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/login", {
        userData: userData,
      }).then((response) => {
        if (response.data[0]) {
          setIsAuthenticated({
            authenticated: true,
            loggedUser: response.data[0].username,
            id: response.data[0].id,
            picture: response.data[0].picture,
          });
          navigate("/", { replace: true });
        }
        if (response.data.length < 1) {
          console.log(response)
          setIsInformationModalOpen(true)
          setIsSuccess(false)
          setMessage(true)

          setTimeout(() => {
            setIsInformationModalOpen(false);
          }, 2500);
        }
      });
    }
  };

  const handleCloseInformationModal = () => {
    setIsInformationModalOpen(false);
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit && handleSubmit}>
      <Input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        autoComplete="email"
        placeholder="Enter Your email"
        err={
          formik.errors.email &&
          formik.touched.email &&
          location.pathname === "register"
        }
      />
      {formik.touched.email &&
      formik.errors.email &&
      location.pathname === "/register" ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}
      {location.pathname === "/register" ? (
        <Input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          placeholder="Enter Your username"
          err={
            formik.touched.username &&
            formik.errors.username &&
            location.pathname === "/register"
          }
        />
      ) : null}
      {formik.touched.username &&
      formik.errors.username &&
      location.pathname === "/register" ? (
        <ErrorMessage>{formik.errors.username}</ErrorMessage>
      ) : null}
      <Input
        type="password"
        id="password"
        name="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Enter Your password"
        err={
          formik.errors.password &&
          formik.touched.password &&
          location.pathname === "/register"
        }
      />
      {formik.touched.password &&
      formik.errors.password &&
      location.pathname === "/register" ? (
        <ErrorMessage>{formik.errors.password}</ErrorMessage>
      ) : null}
      <StyledButton type="submit">
        {location.pathname === "/register" ? "SIGN UP" : "LOG IN"}
      </StyledButton>
      {isSuccess !== null ? (
        <InformationModal
          isOpen={isInformationModalOpen}
          message={
            isSuccess === true
              ? "Account created successfully!"
              : (message ? 'Incorrect login details' : "Something went wrong")
          }
          success={isSuccess}
          onClick={handleCloseInformationModal}
        />
      ) : null}
    </StyledForm>
  );
};

export default Form;
