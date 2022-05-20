import { StyledForm, StyledButton, ErrorMessage } from "components/Form.style";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 5) {
    errors.username = "Must be 5 characters or more";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
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

const Form = ({ location }) => {
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

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        placeholder="Enter Your username"
      />
      {formik.touched.username && formik.errors.username ? (
        <ErrorMessage>{formik.errors.username}</ErrorMessage>
      ) : null}
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Enter Your password"
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorMessage>{formik.errors.password}</ErrorMessage>
      ) : null}
      {location.pathname === "/register" ? (
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter Your email"
        />
      ) : null}
      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}
      <StyledButton type="submit">
        {location.pathname === "/register" ? "SIGN UP" : "LOG IN"}
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
