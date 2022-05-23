import { StyledForm, StyledButton, ErrorMessage, Input } from "components/Form.style";
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
      <Input
        type="text"
        id="username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        placeholder="Enter Your username"
        err={formik.touched.username && formik.errors.username && location.pathname === '/register'}
      />
      {formik.touched.username && formik.errors.username && location.pathname === '/register' ? (
        <ErrorMessage>{formik.errors.username}</ErrorMessage>
      ) : null}
      <Input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Enter Your password"
        err={formik.errors.password && formik.touched.password && location.pathname  === '/register'}
      />
      {formik.touched.password && formik.errors.password && location.pathname === '/register' ? (
        <ErrorMessage>{formik.errors.password}</ErrorMessage>
      ) : null}
      {location.pathname === "/register" ? (
        <Input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter Your email"
          err={formik.errors.email && formik.touched.email}
        />
      ) : null}
      {formik.touched.email && formik.errors.email && location.pathname === '/register' ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}
      <StyledButton type="submit">
        {location.pathname === "/register" ? "SIGN UP" : "LOG IN"}
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
