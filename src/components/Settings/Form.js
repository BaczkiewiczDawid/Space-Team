import Input from "components/Settings/Input";
import { InputWrapper } from "components/Settings/Form.style";

const Form = ({ loggedUserData, setLoggedUserData }) => {
  const handleInputValue = (e) => {
    setLoggedUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <InputWrapper>
        <Input
          label="Full name"
          userValue={loggedUserData.username}
          disabled={true}
        />
        <Input
          label="Job"
          name="job"
          userValue={loggedUserData.job}
          onChange={handleInputValue}
        />
      </InputWrapper>
      <h4>Contact Informations</h4>
      <InputWrapper>
        <Input
          label="Phone Number"
          name="phone"
          userValue={loggedUserData.phone}
          onChange={handleInputValue}
        />
        <Input
          label="Email address"
          name="email"
          userValue={loggedUserData.email}
          disabled={true}
          onChange={handleInputValue}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Country"
          name="country"
          userValue={loggedUserData.country}
          onChange={handleInputValue}
        />
        <Input
          label="City"
          name="city"
          userValue={loggedUserData.city}
          onChange={handleInputValue}
        />
      </InputWrapper>
    </>
  );
};

export default Form;
